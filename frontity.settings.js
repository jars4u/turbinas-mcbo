const settings = {
  "name": "turbinasmcbo-project",
  "state": {
    "frontity": {
      "url": "https://turbinasmaracaibo.com/",
      "title": "Turbinas Maracaibo C.A.",
      "description": "Reparación de convertidores de par para clientes exigentes que buscan calidad"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "¿Quienes Somos?",
              "/quienes-somos-2/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://turbinasmaracaibo.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
