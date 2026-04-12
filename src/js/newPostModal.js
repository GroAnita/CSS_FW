function newPostModal() {
  return `<div
        class="bg-pink-500 p-4 rounded-lg shadow-md mb-4 flex flex-col w-full md:w-1/3 mx-auto border-4 border-pink-300"
      >
        <div class="flex items-start gap-4 mb-2">
          <img
            src="../src/images/megibunadlite.jpg"
            alt="Profile Picture"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p class="text-pink-100 font-semibold">Gro Anita Brathen</p>
          </div>
      
        </div>
        <hr class="border-pink-300 mb-4" />
        <input
          type="text"
          class="w-full p-2 rounded border text-pink-700 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4 placeholder:text-pink-900/80"
          placeholder="Title of your post"
        />
        <textarea
          class="w-full p-2 rounded border text-pink-700 border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4 placeholder:text-pink-900/80
          "
          placeholder="What's on your mind?"
          rows="4"
        ></textarea>
        <div class="flex justify-end gap-2" aria-label="Post actions">
            <button><i class="fa-regular fa-image text-4xl text-pink-200 "></i></button>
        <button id="postButton"
          type="button"
          class="self-end px-4 py-2 bg-pink-700 text-white rounded hover:bg-pink-600 transition"
        >
          Post
        </button>
        </div>
      </div>`;
}

document.getElementById('makeNewPost').addEventListener('click', () => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add(
    'fixed',
    'inset-0',
    'bg-black',
    'bg-opacity-50',
    'flex',
    'items-center',
    'justify-center',
    'z-50',
  );
  modalContainer.innerHTML = newPostModal();
  document.body.appendChild(modalContainer);

  modalContainer.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      document.body.removeChild(modalContainer);
    }
  });
});

document.addEventListener('click', (e) => {
  if (e.target.id === 'postButton') {
    const modalContainer = e.target.closest('.fixed');
    if (modalContainer) {
      document.body.removeChild(modalContainer);
    }
  }
});
