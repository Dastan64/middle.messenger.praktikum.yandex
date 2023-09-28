export const tmpl = `
    <section class="profile">
        <div class="wrapper">
            {{{avatar}}}
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
        </div>
    </section>
`;
