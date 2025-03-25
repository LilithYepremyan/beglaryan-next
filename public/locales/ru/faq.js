export default {
  title: 'Ответы на частые вопросы',
  main: {
    title: 'Самое важное',
    text: `
            Минимальная сумма заказа — {{ firstOrder }} € <br/>
            Режем от 3 метров <br/>
            Предоплата 100% <br/>
            Доставляем по всему миру <br/>
        `,
  },
  reservation: {
    title: 'Резерв тканей',
    text: `
            Мы хотим объяснить наши правила резервирования товаров в корзине, чтобы вы понимали, как это работает. Вот что вы должны знать:
            <ul>
                <li>Каждая ткань, которую вы добавляете в корзину, будет зарезервирована на <strong>{{ time }} только для вас</strong></li>
                <li>После того, как пройдет время резервирования, другие пользователи смогут увидеть эту ткань в каталоге и добавить ее в свою корзину. Однако ткань все еще останется в вашей корзине и <strong>вы сможете ее купить</strong>, если успеете сделать это раньше других пользователей</li>
                <li>Если другой пользователь купит ткань, которая была в вашей корзине и время резервирования истекло, к сожалению вы уже не сможете ее купить</li>
            </ul>
            Мы надеемся, что эти правила помогут вам понять, как работает наша система резервирования товаров в корзине. Если у вас есть какие-либо вопросы, пожалуйста, свяжитесь с нашей службой поддержки.
        `,
  },
  newsletter: {
    title: 'Рассылка',
    text: `
            Подписывайтесь на наши еженедельные рассылки в WhatsApp и по E-mail, чтобы всегда быть в курсе актуальных новостей и предложений. 
            <br/><br/>
            Если вы не получаете рассылки более двух недель, сообщите нам об этом - возможно, ваш номер выпал из рассылки по техническим причинам, связанным с работой WhatsApp. Мы всегда готовы помочь и поддержать вас! И обязательно сообщим заранее о перерывах в рассылке, например, во время отпуска.
        `,
  },
  same: {
    title: 'Можно ли заказать одни и те же ткани снова?',
    text: `
            Ткани, которые мы продаем со склада, доступны в ограниченных количествах. Если ткань, которую вы хотели купить, закончилась, мы не можем заказать ее снова. Тем не менее, наши цены в 2-5 раз ниже, чем при заказе напрямую у производителей.
            <br/><br/>
            Некоторые товары мы можем заказать напрямую из фабрики, но стоимость в 2-5 раз выше. Кроме того, каждый производитель имеет свое минимальное количество для заказа, которое может варьироваться от 6-10 метров до 50, 100 или даже 500 метров. Пожалуйста, учитывайте эту информацию, приобретая ту или иную ткань, которую вы можете захотеть заказать в будущем.
        `,
  },
  processing: {
    title: 'Обработка заказа',
    text: `
            Как только вы подтвердите заказ, мы начнем работу над ним и отправим вам сообщение «Заказ принят». Если вы не получили это подтверждение в течение 24 часов, не стесняйтесь связаться с нами.
            <br/><br/>
            После этого мы подготовим ваш заказ и выставим счет в течение 2-3 рабочих дней.
        `,
  },
  blue: {
    title: 'Синие галочки',
    text: `
            Хотим обратить ваше внимание, что когда вы присылаете нам сообщения, они автоматически становятся «прочитанными». Это особенность программы, в которой мы работаем. То есть, когда вы видите <strong>«синие галочки»</strong> на ваших сообщениях, это еще не означает, что мы их прочитали. Мы постараемся ответить вам как можно скорее, обязательно ждите наше сообщение!
        `,
  },
  invoice: {
    title: 'Счет',
    text: `
            Хотим напомнить, что перед отгрузкой нужно внести <strong>100% предоплату</strong>. Вы можете осуществить оплату как физическое, так и юридическое лицо на основании выставленного счета. Срок оплаты составляет <strong>2 рабочих дня</strong> с момента выставления счета.
            <br/><br/>
            <strong>Важное замечание!</strong> Пожалуйста, не делайте заказы, которые не готовы оплатить!
            <br/><br/>
            Также, мы отправляем товары не реже двух раз в месяц. Если товар не оплачен, он не будет отправлен.
        `,
  },
  delivery: {
    title: 'Доставка',
    text: `
            Мы взвешиваем и надежно упаковываем ткани, после чего передаем груз транспортной компании (DHL, TNT, UPS и др.), либо комплектуем ткани в сборные палеты, которые отправляются фурой на распределительный склад в России или Украине. Со склада логистическая компания, с которой мы сотрудничаем, адресно рассылает ткани по регионам.
            <br /><br />
            <strong>Россия и СНГ:</strong>
            <ul>
                <li>Стоимость доставки до склада в Москве составляет 3,5 €/кг вне зависимости от объема.</li>
                <li>Возможен самовывоз со склада в Москве.</li>
                <li>Доставка по вашему адресу (услуга оплачивается отдельно по тарифам ТК).</li>
                <li>Ориентировочный срок доставки составляет до 4 недель с момента отправки.</li>
                <li>Отправка осуществляется каждые две недели.</li>
            </ul>
            <strong>Украина:</strong>
            <ul>
                <li>Стоимость доставки до ближайшего к вам отделения Новой Почты составляет до 50кг 5€/кг, от 50кг до 300кг 4€/кг, от 300кг 2,5€/кг (фура).</li>
                <li>Возможна доставка по вашему адресу (оплачивается отдельно).</li>
                <li>Ориентировочный срок доставки с момента отправления составляет 4-5 дней.</li>
                <li>Отправка осуществляется каждые две недели.</li>
            </ul>
        `,
  },
  minimal: {
    title: 'Минимальная закупка',
    text: `Минимальная сумма заказа составляет {{ firstOrder }} €. Минимальный отрез устанавливается на каждый тип ткани отдельно в зависимости от цены. Например, дешевые ткани мы отпускаем от 10-15 метров, средние — от 5 метров, а дорогие — от 3 метров. Закупка ниже установленного минимума обговаривается индивидуально.`,
  },
  cut: {
    title: 'Допуски по длине отреза',
    text: `
            Мы хотим предупредить вас о некоторых допусках по длине отреза:
            <ul>
                <li>Мы всегда стараемся выполнить заказ в точности по твоим требованиям, но иногда фактический метраж в счёте может отличаться от заказанного до двух метров из-за остатков на складе. Если отклонения будут больше двух метров, мы обязательно свяжемся с вами для индивидуального согласования. Например, если вы заказали 10 метров, то можете получить отрез длиной 12 метров или 8 метров.</li>
                <li>Иногда из-за особенностей работы со складом некоторые артикулы могут быть недоступны. Это редкий случай, но если такое произойдет, мы сразу вас уведомим.</li>
                <li>Нормы позволяют отклонение по длине до 3% от длины отреза. Это также важно учитывать.</li>
                <li>И последнее - отрез может состоять из двух частей, но меньшая из них не будет короче 3 метров.</li>
            </ul>
        `,
  },
  defects: {
    title: 'Допуски по браку',
    text: `
            <ul>
                <li>Мы считаем браком только грубые дефекты на лицевой стороне ткани, которые находятся на расстоянии более 5 см от кромок. К ним относятся непрокрасы, непропечатки, затяжки, прорези, пятна, просветы и другие похожие дефекты.</li>
                <li>Если дефект незначительный и визуально незаметен, то он не является браком.</li>
                <li>Согласно нашим нормам, допуск по браку составляет 1 дефект на 10 м ткани.</li>
                <li>Компенсация и возврат оговариваются индивидуально в каждом случае. Но не переживайте, мы всегда стараемся быть на стороне клиента :)</li>
            </ul>
        `,
  },
};
