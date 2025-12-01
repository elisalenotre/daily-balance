export default function MimioPopiRoom() {
  return (
    <main className="app-room">
      <section className="card room-card">
        <div className="card-header">
          <h2 className="card-title">Ambiance & musique</h2>
          <span className="card-tag">choisis tes envies du jour</span>
        </div>

        <div className="room-section">
          <p className="room-text">
            Ici, tu pourras choisir la musique de fond qui correspond à ton humeur :
            lofi doux, pluie, piano…
          </p>

          <div className="room-music-options">
            <label className="room-radio">
              <input type="radio" name="music" defaultChecked />
              <span>chocolate milk (yawn)</span>
            </label>
            <label className="room-radio">
              <input type="radio" name="music" disabled />
              <span>pluie douce — bientôt</span>
            </label>
            <label className="room-radio">
              <input type="radio" name="music" disabled />
              <span>jardin tranquille — bientôt</span>
            </label>
          </div>
        </div>
      </section>

      <section className="card room-card">
        <div className="card-header">
          <h2 className="card-title">Coin réconfort</h2>
          <span className="card-tag">vidéos, respiration, pause</span>
        </div>

        <div className="room-section">
          <p className="room-text">
            Un endroit pour rassembler tes ressources qui rassurent : petites vidéos,
            exercices de respiration, méditations guidées...
          </p>

          <div className="room-comfort-blocks">
            <div className="room-comfort-card">
              <h3 className="room-subtitle">Respiration 4–4–4–4</h3>
              <p className="room-text">
                Inspire 4 secondes, bloque 4 secondes, expire 4 secondes, bloque 4
                secondes. Répète 4 fois. On fera un vrai petit timer ici plus tard.
              </p>
            </div>

            <div className="room-comfort-card">
              <h3 className="room-subtitle">Vidéos réconfortantes</h3>
              <ul className="room-list">
                <li>Ta vidéo YouTube réconfort n°1 (à ajouter)</li>
                <li>Une compil de bruits de café cosy</li>
                <li>Un stream chill de fond</li>
              </ul>
            </div>

            <div className="room-comfort-card">
              <h3 className="room-subtitle">Petit rappel gentil</h3>
              <p className="room-text">
                Tu fais de ton mieux, et c&apos;est déjà énorme. Mimio &amp; Popi sont
                fiers de toi, même quand tu coches juste une seule case.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
