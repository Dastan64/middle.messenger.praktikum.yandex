export const tmpl = `
    <section class="password">
        <div class="password__avatar-container">
            <img class="avatar" width="130" height="130" src="https://w.forfun.com/fetch/11/11a048e1dc27122485346049cd6d7c4f.jpeg" alt="">
        </div>
        <h3>Дастан Жамекешев</h3>
        <form class="password__form">
            <div class="password__input-container">
                <label for="oldPassword" class="password__label">Старый пароль:</label>
                <input class="password__input input" type="password" name="oldPassword" id="oldPassword">
            </div>
            <div class="password__input-container">
                <label for="new-password" class="password__label">Новый пароль:</label>
                <input class="password__input input" type="password" name="newPassword" id="new-password">
            </div>
            <div class="password__input-container">
                <label for="confirm-new-password" class="password__label">Подтвердите новый пароль:</label>
                <input class="password__input input" type="password" name="newPassword" id="confirm-new-password">
            </div>
            {{{saveBtn}}}
        </form>
    </section>
`
