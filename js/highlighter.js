AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },

    handleClickEvents: function(){
      this.el.addEventListener("click", evt => {
        const comicContainer = document.querySelector("#comic-container");
        const {state} = comicContainer.getAttribute("read");

        if(state === "comic-list"){
          const id = this.el.getAttribute("id");
          const comicsId = ["batman", "dr_strange", "flash", "spiderman", "superman"];

          if(comicsId.includes(id)){
            placesContainer.setAttribute("read", {
              state: "view",
              selectedCard: id
            });
          }
        }
      });
    },
  
    handlecomicListState: function () {
      const id = this.el.getAttribute("id");
      const comicId = ["batman", "dr_strange", "flash", "spiderman", "superman"];

      if (comicId.includes(id)) {
        const placeContainer = document.querySelector("#comic-container");

        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      this.el.addEventListener("mouseenter", () => {
        this.handlecomicListState();
      });
    },
    handleMouseLeaveEvents: function () {
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data;
  
        if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
  
          if(id == selectedItemId){
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1
            })
          }
        }
      })
    },
  });
  