
         // ВСПЛЫВАЮЩАЯ ФОРМА
        
        var link = document.querySelector(".login");
        var popup = document.querySelector(".modal-content");
        var close = popup.querySelector(".modal-content-close")
        var logname = popup.querySelector("[name=name]");
        var form = popup.querySelector("form");
        var overlay = document.querySelector(".modal-overlay");
        
        link.addEventListener("click", function(event) { // что мы делаем при нажатии на "Напишите нам"
            event.preventDefault(); /* ВСЕГДА отменять действие по умолчанию */ popup.classList.add("modal-content-show"); // вызов окна формы 
            logname.focus(); // курсор сразу появляется в поле
            overlay.classList.add("modal-overlay-show"); // вызов оверлея
            
        });      
                    
        close.addEventListener("click", function(event) { // что мы делаем при нажатии крестика внутри формы
            event.preventDefault();   popup.classList.remove("modal-content-show");  // прячем окно формы             
            overlay.classList.remove("modal-overlay-show"); // прячем оверлей
        });
        
       overlay.addEventListener("click", function(event) { // что мы делаем при нажатии на поле Оверлей вне формы
           event.preventDefault();   
           popup.classList.remove("modal-content-show");  // прячем окно формы 
           overlay.classList.remove("modal-overlay-show"); // прячем оверлей
        });
        
        form.addEventListener("submit", function() { // отправка формы
            event.preventDefault();    
            console.log("Отправляем форму");     
            

        });
        
        window.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) // если нажата клавиша Esc (идентификатор 27)
                { 
                popup.classList.remove("modal-content-show");  // прячем окно формы   
            } 
        });     
           
    // ОТПРАВКА ФОРМЫ НА СЕРВЕР


          