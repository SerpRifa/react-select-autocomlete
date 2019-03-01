export const moneyList = [
    {
      label: "Электронные платежи1",
      options: [
        { label: 'PayPal' },
        { label: 'Skrill' },
        { label: 'Neteller' },
        { label: 'WebMoney' },
        { label: 'Perfect Money' },
        { label: 'iDEAL' },
        { label: 'Neosurf' },
        { label: 'Qiwi' },
        { label: 'Yandex.Money' },
      ].map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,
      }))
    },
    { 
      label: 'Cripto:',
      options: [
        { label: 'Flexepin' },    
        { label: 'Bitcoin' },
        { label: 'Ripple' },
        { label: 'Ethereum' },
        { label: 'Litecoin' },
        { label: 'Dogecoin' },
        { label: 'Monero' },
        { label: 'NEM' },
        { label: 'Zcash' },
        { label: 'Dash' },
        { label: 'Peercoin' },
      ].map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,
      }))
    },  
    { 
      label: 'Gifts',
      options: [
        { label: 'Amazone' },
        { label: 'Apple' },
        { label: 'Wallmart' },
        { label: 'Steam' },
        { label: 'Ebay' },
        { label: 'CSGO' },
      ].map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,
      }))
     },  
    { 
      label: 'Money Transfers:',
      options: [
        { label: 'Western Union' },
        { label: 'MoneyGram' },
        { label: 'Contact' },
        { label: 'Unistream' },
        { label: 'Золотая Корона(RU)' },
        { label: 'Cash:' },
        { label: 'SWIFT' },
        { label: 'Online Banks' },
      ].map(suggestion => ({
        value: suggestion.label,
        label: suggestion.label,
      }))
    },  
    ];