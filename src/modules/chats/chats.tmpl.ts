import styles from './chats.module.scss';

export const tmpl = `
  <section class=${styles.section}>
        <div class=${styles.container}>
        <div class=${styles.panel}>
            <img width="48" height="48"
                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg" alt=""
                 class=${styles.avatar}>
        </div>
        <div class=${styles.sidebar}>
            <div class=${styles.searchContainer}>
                <input class=${styles.searchInput} type="text" aria-label="Поиск" placeholder="Поиск..."/>
            </div>
            <ul class=${styles.chats}>

                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
                <li class=${styles.chat}>
                    <a class=${styles.wrapper} href="#">
                        <div>
                            <img width="48" height="48" class=${styles.avatar}
                                 src="https://w.forfun.com/fetch/78/788f71a40bf9ad697b38b57c343ca234.jpeg"
                                 alt="">
                        </div>
                        <div class=${styles.info}>
                            <span class=${styles.name}>Джонни Депп</span>
                            <span class=${styles.msg}>Привет, Эмбер! Помнишь меня?</span>
                        </div>
                        <div class=${styles.extra}>
                            <span class=${styles.etime}>1:38</span>
                            <span class=${styles.notification}>13</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class=${styles.current}>
            <div class=${styles.top}>
                <div class=${styles.topInfo}>
                    <span class=${styles.talkerName}>Даниил</span>
                    <span class=${styles.status}>Был в сети 6 минут назад</span>
                    <button class=${styles.settingsBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <path d="M17 12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523
                            11 18 11C17.4477 11 17 11.4477 17 12Z" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523
                            11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11
                            6 11C5.44772 11 5 11.4477 5 12Z" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class=${styles.conversation}>
                <ul class=${styles.messages}>
                  {{#each messages}}
                    {{{this}}}
                  {{/each}}
                </ul>
            </div>
            {{{form}}}
        </div>
      </div>
  </section>
`;
