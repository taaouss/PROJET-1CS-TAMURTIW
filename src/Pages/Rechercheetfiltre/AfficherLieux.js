import React, { useState, useEffect } from "react";
import SearchBar from "../../Components/SearchBar";
import Map_Annonce from "../../Components/Map_Annonce/map_annonce";
import axios from "axios";
import SideBar from "../../Components/SideBar2";
import NavBar from "../../Components/NavBar2";
import "./style.css";
import Footer from "../../Components/Footer/Footer";

// Page pour la recherche des annonces et l'affichage des annonces
const AfficherLieux = () => {
  const [lieux, SetAnounces] = useState(null);
  const [announcesall, SetAnnouncesall] = useState(null);
  const [aiispending, setAiispending] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [suivant, setSuivant] = useState(false);
  const [precedent, setPrecedent] = useState(false);
  const [search, setSearch] = useState(false);

  // Cette fonction permet d'obtenir les annonces de la base de données, 10 annonces par page
  async function fetchData(nbpage) {
    const res = await axios.get(
      "http://127.0.0.1:5000/lieugetnew/" + nbpage
    );
    console.log(res.data);
    SetAnounces(res.data.lieux);
    SetAnnouncesall(res.data.lieux);
    setAiispending(false);
    setError(null); // ...
    setPrecedent(res.data.postspre);
    setSuivant(res.data.postssuiv);
    setPage(res.data.postspage);
  }

  // Utilise useEffect pour obtenir les annonces dès que la page s'affiche
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://127.0.0.1:5000/lieugetnew/1");
      console.log(res.data);
      SetAnounces(res.data.lieux);
      SetAnnouncesall(res.data.lieux);

      setAiispending(false);
      setError(null); // ...
      setPrecedent(res.data.lieuxpre);
      setSuivant(res.data.lieuxsuiv);
      setPage(res.data.lieuxpage);
      console.log(res.data.lieuxpage);
    }

    fetchData();
  }, []);

  // Cette fonction permet d'envoyer les paramètres de recherche faits par l'utilisateur vers le backend
  const handleFilter = async (annonceSearch) => {
    await axios
      .post("http://127.0.0.1:5000/recherche", annonceSearch)
      .then(() => {
        // alert("Envoyé avec succès");
        setSearch(true);
      })
      .catch(() => alert("Il y a un problème"));
    const res = await axios.get("http://127.0.0.1:5000/rechercheget");
    console.log(res.data.lieux);
    SetAnounces(res.data.lieux);
    SetAnnouncesall(res.data.lieux);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Le code de la page de recherche et affichage des annonces
  return (
    <div>
      {/* Affichage de la navbar */}
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <div style={{ height: "80px" }}></div>
      <div className="div__search_main">
        {/* Recherche et filtres */}
        {announcesall && <SearchBar handleFilter={handleFilter} />}
        {search && (
          <button
            className="bt_annuler"
            onClick={() => {
              fetchData(1);
              setSearch(false);
            }}
          >
            Annuler la recherche
          </button>
        )}
      </div>
      {error && <div> {error}</div>}
      {aiispending && <div>Loading ...</div>}
      {/* Affichage des annonces et de la carte */}
      {announcesall && <Map_Annonce lieux={lieux} />}
      <div className="div-next-pre">
        {announcesall && precedent && (
          <button
            className="next_pre_bt"
            onClick={async () => {
              fetchData(page - 1);
            }}
          >
            Précédent
          </button>
        )}
        {announcesall && suivant && (
          <button
            className="next_pre_bt"
            onClick={async () => {
              fetchData(page + 1);
            }}
          >
            Suivant
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AfficherLieux;
