export const dateFormatter = new Intl.DateTimeFormat('pt-BR') // formata data para formato pt-br

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}) // formata moeda para moeda brasileira.
