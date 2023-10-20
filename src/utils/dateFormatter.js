function dateFormatter(inputDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', options);
}

export default dateFormatter;