window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const name = params.get('nombre');

    document.getElementById('result_name').innerHTML = name;
})