document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('.stats-table tbody');

    fetch('Data/data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(player => {
                const row = document.createElement('tr');

                row.innerHTML = `                
                <td>${player.username}</td>
                <td>${player.game}</td>
                <td>${player.kills}</td>
                <td>${player.deaths}</td>
                <td>${player.kill_death_ratio}</td>
                <td>${player.assists}</td>
                <td>${player.score_per_minute}</td>
                <td>${player.game_time}</td>
            `;
            tableBody.appendChild(row);
            });
        })

        .catch(error => console.error('Error Fetching Data:', error))
});