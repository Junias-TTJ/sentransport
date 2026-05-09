import './StatReseau.css';

function StatReseau({ lignes }) {
    const totalLignes = lignes.length;
    const totalArrets = lignes.reduce((somme, ligne) => somme + ligne.arrets, 0);
    const ligneMax = lignes.reduce(
        (max, ligne) => ligne.arrets > max.arrets ? ligne : max,
        lignes[0]
    );

    return (
        <div className="stat-reseau">
            <h2>Statistiques du reseau</h2>

            <div className="stat-etiquettes">
                <div className="stat-etiquette">
                    <span className="stat-valeur">{totalLignes}</span>
                    <span className="stat-label">Lignes</span>
                </div>

                <div className="stat-etiquette">
                    <span className="stat-valeur">{totalArrets}</span>
                    <span className="stat-label">Arrets</span>
                </div>

                <div className="stat-etiquette">
                    <span className="stat-valeur">{ligneMax.numero}</span>
                    <span className="stat-label">Ligne</span>
                </div>
            </div>
        </div>
    );
}

export default StatReseau;
