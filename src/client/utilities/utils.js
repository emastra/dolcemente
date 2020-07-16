const generateDate = (timestamp) => {
    const d = new Date(timestamp);
    const months = [ 'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic' ];
  
    const day = d.getDate();
    const month = months[d.getMonth()];
  
    return `${day} ${month}`;
}

const formatPrice = (price) => {
    const fixedPrice = price.toFixed(2);
    return String(fixedPrice).replace('.', ',');
}

const calculateCurrentPrice = (price, createdAt) => {
    const now = new Date();

    const diff = now - createdAt;
    const dayDiff = diff / (1000 * 3600 * 24);

    if (dayDiff < 1) 
        return price;
    if (dayDiff > 1 && dayDiff < 2) 
        return formatPrice(((price / 100) * 80));
    if (dayDiff > 2 && dayDiff < 3) 
        return formatPrice(((price / 100) * 20));
    if (dayDiff > 3) 
        return 0;
}

export {
    generateDate,
    calculateCurrentPrice
}