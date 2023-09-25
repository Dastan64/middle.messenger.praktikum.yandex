export const tmpl = `
    <section class="profile">
    <div class="profile__visual">
        <img class="profile__avatar" width="130" height="130"
             src="https://w.forfun.com/fetch/11/11a048e1dc27122485346049cd6d7c4f.jpeg"
             alt="">
        <button class="profile__change-button button">Изменить фото профиля</button>
        <input class="profile__avatar-input" type="file" name="avatar">
        <h3 class="profile__name">Дастан Жамекешев</h3>
    </div>
    <form class="profile__info info">
        <div class="info__line">
            <span class="info__role">Логин</span>
            <span class="info__value">@dastan64</span>
        </div>
    
        <div class="info__line">
            <span class="info__role">E-mail</span>
            <span class="info__value">dastanz64@yandex.kz</span>
        </div>
    
        <div class="info__line">
            <span class="info__role">Имя</span>
            <span class="info__value">Дастан</span>
        </div>
    
        <div class="info__line">
            <span class="info__role">Фамилия</span>
            <span class="info__value">Жамекешев</span>
        </div>
    
        <div class="info__line">
            <span class="info__role">Имя в чате</span>
            <span class="info__value">Dastan Z</span>
        </div>
    
        <div class="info__line">
            <span class="info__role">Телефон</span>
            <span class="info__value">+7-123-456-78-90</span>
        </div>
    </form>
    <div class="profile__links">
        {{{changeProfileDataLink}}}
        {{{changePasswordLink}}}
    </div>
    </section>
`;
