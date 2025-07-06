let list = [];

      function addItem() {
        let input = document.querySelector(".todo-input");
        let value = input.value.trim();

        if (value === "") {
          alert("You can't add empty text");
          return;
        }

        list.push(value);
        renderList();
        input.value = "";
      }

      function renderList() {
        const taskli = document.getElementById("taskli");
        taskli.innerHTML = list
          .map(
            (item, index) =>
              `<li>${item}<button class="del_btn" onclick="del(${index})">Delete</button></li>`
          )
          .join("");
      }

      function del(index) {
        list.splice(index, 1);
        renderList();
      }