export function Pagination(props: {
    totalItems: number,
    itemsPerPage: number,
    currentPage: number,
    onPageChange: (page: number) => void
  }) {
    const { totalItems, itemsPerPage, currentPage, onPageChange } = props;
    
    // Calculer le nombre total de pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Si pas de pages ou une seule page, ne pas afficher la pagination
    if (totalPages <= 1) return null;
    
    // Déterminer les pages à afficher (page courante et 2 de chaque côté)
    const getPageNumbers = () => {
      const pageNumbers = [];
      
      // Déterminer le début et la fin des numéros de page à afficher
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);
      
      // Ajuster si on est proche du début ou de la fin
      if (currentPage <= 3) {
        // Près du début, montrer les 5 premières pages
        endPage = Math.min(5, totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Près de la fin, montrer les 5 dernières pages
        startPage = Math.max(1, totalPages - 4);
      }
      
      // Créer le tableau avec les numéros de page
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      return pageNumbers;
    };
    
    const pageNumbers = getPageNumbers();
    
    return (
      <nav aria-label="Navigation des pages">
        <ul className="pagination justify-content-center">
          {/* Bouton première page */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(1)}
              disabled={currentPage === 1}
            >
              &laquo;
            </button>
          </li>
          
          {/* Bouton précédent */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
          </li>
          
          {/* Numéros de page (limités à 5) */}
          {pageNumbers.map(number => (
            <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            </li>
          ))}
          
          {/* Bouton suivant */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </li>
          
          {/* Bouton dernière page */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    );
  }