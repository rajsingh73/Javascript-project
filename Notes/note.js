const btn = document.querySelector('.create');
        const container = document.querySelector('.container');

        function saveNotes() {
            const texts = Array.from(container.querySelectorAll('textarea')).map(t => t.value);
            localStorage.setItem("notes", JSON.stringify(texts));
        }

        function loadNotes() {
            const saved = JSON.parse(localStorage.getItem("notes")) || [];
            container.innerHTML = '';
            saved.forEach(text => {
                addNote(text);
            });
        }

        function addNote(text = '') {
            const noteDiv = document.createElement('div');
            noteDiv.innerHTML = `
                <div class="inline relative">
                    <textarea class="bg-white outline-none input-box relative w-100 h-40">${text}</textarea>
                    <button class="absolute bottom-2 cursor-pointer right-2">
                        <img class="w-8" src="./delete.png">
                    </button>
                </div>
            `;
            const textarea = noteDiv.querySelector('textarea');
            const deleteBtn = noteDiv.querySelector('button');

            textarea.addEventListener('input', saveNotes);
            deleteBtn.addEventListener('click', () => {
                noteDiv.remove();
                saveNotes();
            });

            container.appendChild(noteDiv);
        }

        btn.addEventListener('click', () => {
            addNote();
            saveNotes();
        });
        loadNotes();