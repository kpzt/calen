curso1 = localStorage.getItem("NomeDoCurso")
sala1 = localStorage.getItem("NomeDaSala") 
hora1 = localStorage.getItem("HORARIO") 


info1=localStorage.getItem("item1")
info2=localStorage.getItem("item2")
info3=localStorage.getItem("item3")
info4=localStorage.getItem("item4")
info5=localStorage.getItem("item5")


data1 =  localStorage.getItem("data1")
data2 =  localStorage.getItem("data2")
data3 =  localStorage.getItem("data3")
data4 =  localStorage.getItem("data4")
data5 =  localStorage.getItem("data5")

     // Dados dos eventos
     const events = [        
        { aluno: info1,  cor: "matematica" , data: data1 },
        { aluno: info2,  cor: "matematica" , data: data2},
        { aluno: info3,  cor: "historia" , data: data3},
        { aluno: info4,  cor: "matematica" , data: data4},     
        { aluno: info5,  cor: "historia" , data: data5},     

    ];

    // Gerar calendário
    const generateCalendar = () => {
        const calendar = document.getElementById("calendar");
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        // Número de dias no mês
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Criar os dias no calendário
        for (let day = 1; day <= daysInMonth; day++) {
            const date = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

            // Criar o elemento do dia
            const dayElement = document.createElement("div");
            dayElement.className = "day";

            // Adicionar a data no topo
            const dayTitle = document.createElement("strong");
            dayTitle.innerText = `${day}/${currentMonth + 1}/${currentYear}`;
            dayElement.appendChild(dayTitle);

            // Filtrar eventos para o dia atual
            const dayEvents = events.filter(event => event.data === date);

            // Adicionar os eventos ao dia
            dayEvents.forEach(event => {
                const eventElement = document.createElement("div");
                eventElement.className = `event ${event.cor}`;
                eventElement.innerHTML = `
                   ${event.aluno}   <br>
                   
                  
                `;
                dayElement.appendChild(eventElement);
            });

            // Adicionar o dia ao calendário
            calendar.appendChild(dayElement);
        }
    };

    generateCalendar();

function ExcluirData(){

    document.getElementById("numero").style.visibility= "visible"

// se valor preechicho for... apague valor

    valor = document.getElementById("numero").value

    if(valor == 1){
        localStorage.removeItem("data1")
    }
    if(valor == 2){
        localStorage.removeItem("data2")
    }
    if(valor == 3){
        localStorage.removeItem("data3")
    }
    if(valor == 4){
        localStorage.removeItem("data4")
    }
    if(valor == 5){
        localStorage.removeItem("data5")
    }

  


}