<template>
  <div class="like-container">
    <div v-if="isLoading" class="loading">Cargando...</div>

    <button v-else-if="likeCount === 0" @click="likePost">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        ></path>
      </svg>
      Me gusta
    </button>

    <button v-else @click="likePost">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        ></path>
      </svg>
      Me gusta
      <span class="like-count">{{ likeCount }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { actions } from "astro:actions";

import { ref, watch } from "vue";
import confetti from "canvas-confetti";
import debounce from "lodash.debounce";

interface Props {
  postId: string;
}

const props = defineProps<Props>();

const likeCount = ref(0);
const likeClicks = ref(0);
const isLoading = ref(true);

watch(
  likeCount,
  debounce(async () => {
    // fetch(`/api/posts/likes/${props.postId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ likes: likeClicks.value }),
    // });
    await actions.updatePostLikes({
      postId: props.postId,
      increment: likeClicks.value,
    });

    likeClicks.value = 0;
  }, 500),
);

const likePost = async () => {
  likeCount.value++;
  likeClicks.value++;

  // const { data, error } = await actions.getGreeting({
  //   age: 39,
  //   name: 'Fernando',
  //   isActive: true,
  // });

  // if (error) {
  //   return alert('Algo salió mal');
  // }

  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2,
    },
  });
};

const getCurrentLikes = async () => {
  const { data, error } = await actions.getPostLikes(props.postId);

  if (error) {
    return alert(error);
  }

  // const resp = await fetch(`/api/posts/likes/${props.postId}`);
  // if (!resp.ok) return;
  // const data = await resp.json();

  likeCount.value = data.likes;
  isLoading.value = false;
};

getCurrentLikes();
</script>

<style scoped>
.like-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

button {
  background: var(
    --accent-gradient,
    linear-gradient(135deg, #7750eaff, #8b5cf6)
  );
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
  display: flex;
  align-items: center;
  gap: 8px;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.6);
}

.loading {
  background: var(--bg-secondary, #1e293b);
  color: var(--text-muted, #94a3b8);
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: bold;
  animation: pulse 1.5s infinite;
}

.like-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.9rem;
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
