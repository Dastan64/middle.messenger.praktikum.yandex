export const tmpl = `
    <section class="data">
        <div class="data__avatar-container">
            <img class="avatar" width="130" height="130" src="https://w.forfun.com/fetch/11/11a048e1dc27122485346049cd6d7c4f.jpeg" alt="">
        </div>
        <h3>Дастан Жамекешев</h3>
        <form class="data__form">
            <div class="data__input-container">
                <label for="login" class="data__label">Логин:</label>
                <input class="data__input input" type="text" name="login" id="login">
            </div>
            
            <div class="data__input-container">
                <label for="email" class="data__label">E-mail:</label>
                <input class="data__input input" type="email" name="email" id="email">
            </div>
                        
            <div class="data__input-container">
                <label for="first_name" class="data__label">Имя:</label>
                <input class="data__input input" type="text" name="first_name" id="first_name">
            </div>
                        
            <div class="data__input-container">
                <label for="second_name" class="data__label">Фамилия:</label>
                <input class="data__input input" type="text" name="second_name" id="second_name">
            </div>
                        
            <div class="data__input-container">
                <label for="phone" class="data__label">Номер телефона:</label>
                <input class="data__input input" type="tel" name="phone" id="phone">
            </div>
                        
            <div class="data__input-container">
                <label for="display_name" class="data__label">Имя в чате:</label>
                <input class="data__input input" type="text" name="display_name" id="display_name">
            </div>
            
            {{{saveBtn}}}
        </form>
    </section>
`
