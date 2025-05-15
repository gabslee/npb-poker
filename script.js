document.addEventListener('DOMContentLoaded', function() {
    // Dados do campeonato de poker
    const pokerData = [
        {
            ranking: 1,
            rankingAnterior: 1,
            ganhoPos: 0,
            atleta: "PEIXE",
            pontuacoes: [12, 23, 46, 20, 14, 20],
            total: 135
        },
        {
            ranking: 2,
            rankingAnterior: 3,
            ganhoPos: 1,
            atleta: "LEANDRO",
            pontuacoes: [16, 14, 36, 18, 23, 18],
            total: 125
        },
        {
            ranking: 3,
            rankingAnterior: 4,
            ganhoPos: 1,
            atleta: "TURCÃO",
            pontuacoes: [20, 18, 24, 10, 12, 14],
            total: 98
        },
        {
            ranking: 4,
            rankingAnterior: 2,
            ganhoPos: -2,
            atleta: "CHINA",
            pontuacoes: [14, 20, 40, 16, 0, 0],
            total: 90
        },
        {
            ranking: 5,
            rankingAnterior: 6,
            ganhoPos: 1,
            atleta: "IGOR",
            pontuacoes: [23, 16, 2, 8, 18, 16],
            total: 83
        },
        {
            ranking: 6,
            rankingAnterior: 5,
            ganhoPos: -1,
            atleta: "DOUG",
            pontuacoes: [18, 12, 20, 0, 0, 0],
            total: 50
        },
        {
            ranking: 7,
            rankingAnterior: 13,
            ganhoPos: 6,
            atleta: "THOMAS",
            pontuacoes: [0, 0, 10, 0, 16, 23],
            total: 49
        },
        {
            ranking: 8,
            rankingAnterior: 15,
            ganhoPos: 7,
            atleta: "THEMIS",
            pontuacoes: [0, 0, 8, 0, 20, 12],
            total: 40
        },
        {
            ranking: 9,
            rankingAnterior: 7,
            ganhoPos: -2,
            atleta: "DENIS",
            pontuacoes: [0, 0, 28, 4, 0, 0],
            total: 32
        },
        {
            ranking: 10,
            rankingAnterior: 8,
            ganhoPos: -2,
            atleta: "ALEX",
            pontuacoes: [0, 0, 32, 0, 0, 0],
            total: 32
        },
        {
            ranking: 11,
            rankingAnterior: 9,
            ganhoPos: -2,
            atleta: "GABRIEL",
            pontuacoes: [0, 0, 6, 23, 0, 0],
            total: 29
        },
        {
            ranking: 12,
            rankingAnterior: 10,
            ganhoPos: -2,
            atleta: "SÉRGIO PÓ",
            pontuacoes: [0, 0, 16, 12, 0, 0],
            total: 28
        },
        {
            ranking: 13,
            rankingAnterior: 11,
            ganhoPos: -2,
            atleta: "CANDIDO",
            pontuacoes: [0, 0, 2, 14, 0, 0],
            total: 16
        },
        {
            ranking: 14,
            rankingAnterior: 12,
            ganhoPos: -2,
            atleta: "RENAN",
            pontuacoes: [0, 0, 12, 0, 0, 0],
            total: 12
        },
        {
            ranking: 15,
            rankingAnterior: 14,
            ganhoPos: -1,
            atleta: "JANDINHO HURLEY",
            pontuacoes: [0, 0, 4, 5, 0, 0],
            total: 9
        },
        {
            ranking: 16,
            rankingAnterior: 16,
            ganhoPos: 0,
            atleta: "HAROLDO",
            pontuacoes: [0, 0, 2, 0, 0, 0],
            total: 2
        },
        {
            ranking: 17,
            rankingAnterior: 17,
            ganhoPos: 0,
            atleta: "MARCELO",
            pontuacoes: [0, 0, 2, 0, 0, 0],
            total: 2
        }
    ];

    // Função para preencher a tabela
    function populateTable() {
        const tableBody = document.querySelector('#leaderboard tbody');
        tableBody.innerHTML = ''; // Limpa a tabela antes de preencher
        
        pokerData.forEach(player => {
            const row = document.createElement('tr');
            
            // Adiciona classe para destacar os 3 primeiros
            if (player.ranking <= 3) {
                row.classList.add(`top-${player.ranking}`);
            }
            
            // Ranking atual
            const rankingCell = document.createElement('td');
            rankingCell.textContent = `${player.ranking}°`;
            row.appendChild(rankingCell);
            
            // Ranking anterior
            const rankingAntCell = document.createElement('td');
            rankingAntCell.textContent = `${player.rankingAnterior}°`;
            row.appendChild(rankingAntCell);
            
            // Ganho/Posição com indicador visual
            const ganhoCell = document.createElement('td');
            let changeClass = '';
            let changeSymbol = '';
            
            if (player.ganhoPos > 0) {
                changeClass = 'position-up';
                changeSymbol = '▲';
            } else if (player.ganhoPos < 0) {
                changeClass = 'position-down';
                changeSymbol = '▼';
            } else {
                changeClass = 'position-same';
                changeSymbol = '●';
            }
            
            ganhoCell.innerHTML = `<span class="change-indicator ${changeClass}">${changeSymbol}</span> ${player.ganhoPos}`;
            ganhoCell.classList.add(changeClass);
            row.appendChild(ganhoCell);
            
            // Nome do atleta
            const atletaCell = document.createElement('td');
            atletaCell.textContent = player.atleta;
            row.appendChild(atletaCell);
            
            // Pontuações de cada etapa
            player.pontuacoes.forEach(pontuacao => {
                const pontuacaoCell = document.createElement('td');
                pontuacaoCell.textContent = pontuacao;
                row.appendChild(pontuacaoCell);
            });
            
            // Total
            const totalCell = document.createElement('td');
            totalCell.textContent = player.total;
            totalCell.style.fontWeight = 'bold';
            row.appendChild(totalCell);
            
            tableBody.appendChild(row);
        });
    }
    
    // Navegação por tabs
    function setupTabNavigation() {
        const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('main > section');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove a classe active de todos os links
                navLinks.forEach(l => l.parentElement.classList.remove('active'));
                
                // Adiciona a classe active ao link clicado
                this.parentElement.classList.add('active');
                
                // Esconde todas as seções
                sections.forEach(section => {
                    section.classList.add('hidden-section');
                });
                
                // Mostra a seção correspondente ao link clicado
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).classList.remove('hidden-section');
            });
        });
    }
    
    // Função para ordenar a tabela por diferentes colunas
    function setupTableSorting() {
        const headers = document.querySelectorAll('#leaderboard th');
        
        headers.forEach((header, index) => {
            if (index === 0 || index === 3 || index === 10) { // Ranking, Atleta ou Total
                header.style.cursor = 'pointer';
                header.addEventListener('click', function() {
                    sortTable(index);
                });
            }
        });
    }
    
    function sortTable(columnIndex) {
        const sortedData = [...pokerData];
        
        if (columnIndex === 0) { // Ranking
            sortedData.sort((a, b) => a.ranking - b.ranking);
        } else if (columnIndex === 3) { // Atleta
            sortedData.sort((a, b) => a.atleta.localeCompare(b.atleta));
        } else if (columnIndex === 10) { // Total
            sortedData.sort((a, b) => b.total - a.total);
        }
        
        // Atualiza os dados e repopula a tabela
        pokerData.length = 0;
        pokerData.push(...sortedData);
        populateTable();
    }
    
    // Função para pesquisar jogadores
    function setupSearch() {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Pesquisar jogador...';
        searchInput.classList.add('search-input');
        
        const searchContainer = document.createElement('div');
        searchContainer.classList.add('search-container');
        searchContainer.appendChild(searchInput);
        
        document.querySelector('#classificacao h2').after(searchContainer);
        
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            if (searchTerm.length > 0) {
                const filteredData = pokerData.filter(player => 
                    player.atleta.toLowerCase().includes(searchTerm)
                );
                
                const tableBody = document.querySelector('#leaderboard tbody');
                tableBody.innerHTML = '';
                
                if (filteredData.length > 0) {
                    filteredData.forEach(player => {
                        // Recria a linha para o jogador filtrado
                        const row = document.createElement('tr');
                        
                        if (player.ranking <= 3) {
                            row.classList.add(`top-${player.ranking}`);
                        }
                        
                        // Ranking atual
                        const rankingCell = document.createElement('td');
                        rankingCell.textContent = `${player.ranking}°`;
                        row.appendChild(rankingCell);
                        
                        // Ranking anterior
                        const rankingAntCell = document.createElement('td');
                        rankingAntCell.textContent = `${player.rankingAnterior}°`;
                        row.appendChild(rankingAntCell);
                        
                        // Ganho/Posição
                        const ganhoCell = document.createElement('td');
                        let changeClass = '';
                        let changeSymbol = '';
                        
                        if (player.ganhoPos > 0) {
                            changeClass = 'position-up';
                            changeSymbol = '▲';
                        } else if (player.ganhoPos < 0) {
                            changeClass = 'position-down';
                            changeSymbol = '▼';
                        } else {
                            changeClass = 'position-same';
                            changeSymbol = '●';
                        }
                        
                        ganhoCell.innerHTML = `<span class="change-indicator ${changeClass}">${changeSymbol}</span> ${player.ganhoPos}`;
                        ganhoCell.classList.add(changeClass);
                        row.appendChild(ganhoCell);
                        
                        // Nome do atleta
                        const atletaCell = document.createElement('td');
                        atletaCell.textContent = player.atleta;
                        row.appendChild(atletaCell);
                        
                        // Pontuações
                        player.pontuacoes.forEach(pontuacao => {
                            const pontuacaoCell = document.createElement('td');
                            pontuacaoCell.textContent = pontuacao;
                            row.appendChild(pontuacaoCell);
                        });
                        
                        // Total
                        const totalCell = document.createElement('td');
                        totalCell.textContent = player.total;
                        totalCell.style.fontWeight = 'bold';
                        row.appendChild(totalCell);
                        
                        tableBody.appendChild(row);
                    });
                } else {
                    // Se não encontrar nenhum jogador
                    const row = document.createElement('tr');
                    const cell = document.createElement('td');
                    cell.colSpan = 11;
                    cell.textContent = 'Nenhum jogador encontrado';
                    cell.style.textAlign = 'center';
                    row.appendChild(cell);
                    tableBody.appendChild(row);
                }
            } else {
                // Se o campo de pesquisa estiver vazio, mostra todos os jogadores
                populateTable();
            }
        });
    }
    
    // Inicializa a tabela e as funcionalidades
    populateTable();
    setupTabNavigation();
    setupTableSorting();
    setupSearch();
    
    // Adiciona estilo CSS para a caixa de pesquisa
    const style = document.createElement('style');
    style.textContent = `
        .search-container {
            margin-bottom: 1.5rem;
        }
        
        .search-input {
            padding: 0.75rem;
            border-radius: 4px;
            border: 1px solid #333;
            background-color: #252525;
            color: #f5f5f5;
            width: 100%;
            max-width: 300px;
            font-size: 1rem;
        }
        
        .search-input::placeholder {
            color: #888;
        }
        
        th[data-sortable="true"] {
            cursor: pointer;
        }
        
        th[data-sortable="true"]:hover {
            background-color: #c4a030;
        }
    `;
    document.head.appendChild(style);
}); 