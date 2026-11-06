const API_URL = "https://scraper.iguzman.com.mx/search"; //import.meta.env.VITE_API_URL

export const searchService = {
  async searchTerms() {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": "diplomado-unam-26",
        },
        body: JSON.stringify({ query: "Hola Mundo" }),
      });

      if (!response.ok) {
        throw new Error(`Error en la llamda al request ${API_URL}`);
      }

      const resultado = await response.json();

      return resultado.data;
    } catch (error) {
      console.log("Error al procesar el search", error);
      throw error;
    }
  },
};
