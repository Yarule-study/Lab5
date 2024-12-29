document.addEventListener('DOMContentLoaded', () => {
    const validators = []

    const inputs = document.querySelectorAll('input')
    const output = document.getElementById('output-box')
    const button = document.getElementById('submit-btn')

    if (!output) {
        console.error('Output element not found!');
        return;
    }

    const addValidator = (regexp) => validators.push((text) => regexp.test(text))

    addValidator(/^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії'`’ʼ]+ [А-ЩЬЮЯҐЄІЇ]\.[А-ЩЬЮЯҐЄІЇ]\.$/)
    addValidator(/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/)
    addValidator(/^[A-Z]{2} №\d{6}$/)
    addValidator(/^[А-ЩЬЮЯҐЄІЇ]{4}$/)
    addValidator(/^\d{2}\.\d{2}\.\d{4}$/)

    button.addEventListener('click', () => {
        let passed = true

        for (let i = 0; i < validators.length; i++) {
            const input = inputs[i]
            input.classList.remove('wrong')
            const ok = validators[i](input.value)

            if (ok) continue

            input.classList.add('wrong')
            passed = false
        }

        if (!passed) {
            console.log('Validation failed');
            return;
        }

        console.log('Validation passed');
        output.innerHTML =
            `<p><b>ПІБ:</b> ${inputs[0].value}</p>` +
            `<p><b>Телефон:</b> ${inputs[1].value}</p>` +
            `<p><b>ID-card:</b> ${inputs[2].value}</p>` +
            `<p><b>Факультет:</b> ${inputs[3].value}</p>` +
            `<p><b>Дата народж.:</b> ${inputs[4].value}</p>`
    })
})
