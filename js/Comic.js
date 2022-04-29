AFRAME.registerComponent("read", {  
  schema: {
    state: {type: "string", default: "comic-list"},
    selectedCard: {type: "string", default: "#card1"},
  },

  init: function () {
    this.comicContainer = this.el;   

    this.createCards();
  },

  tick: function(){
    const {state} = this.el.getAttribute("read");

    if(state === "view"){
      this.hideEl([this.placesContainer]);
      this.showView();
    }
  },

  hideEl: function(elList){
    elList.map(el => {
      el.setAttribute("visible", false);
    });
  },

  showView: function(){
    const {selectedCard} = this.data;

    const skyEl = document.querySelector("#main-container");

    skyEl.setAttribute("material", {
      src: `./assets/360_images${selectedCard}/image.jpg`,
      color: "white"
    });
  },
  
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "batman",
        title: "Bat Man",
        url: "./assets/thumbnails/batman.jpg",
      },
      {
        id: "dr_strange",
        title: "Dr. Strange",
        url: "./assets/thumbnails/dr_strange.jpg",
      },
      {
        id: "spiderman",
        title: "Spider Man",
        url: "./assets/thumbnails/spiderman.jpg",
      },
      {
        id: "superman",
        title: "Super Man",
        url: "./assets/thumbnails/superman.jpg",
      },
      {
        id: "flash",
        title: "Flash",
        url: "./assets/thumbnails/flash.jpeg",
      }
    ];
      
    let prevoiusXPosition = -75;
  
    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };

      prevoiusXPosition = posX;
  
      const borderEl = this.createBorder(position, item.id);
  
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);
  
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);
  
      this.comicContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });
    entityEl.setAttribute("cursor-listener", {});
  
    return entityEl;
  },

  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", { src: item.url });
  
    return entityEl;
  },
    
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");

    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);

    return entityEl;
  },
});