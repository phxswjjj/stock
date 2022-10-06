
const locale = 'en-US';
const dollarFormatter = new Intl.NumberFormat(locale, {
  style: 'currency', currency: 'USD'
});
const percentFormatter = new Intl.NumberFormat(locale, {
  style: 'percent', minimumFractionDigits: 2
});

export class Item {

  get priceDiff(): number | null {
    if (this.cost == null || this.price == null) return null;
    return this.price - this.cost;
  }
  get priceDiffFormatted(): string {
    if (this.priceDiff == null) return ''
    return dollarFormatter.format(this.priceDiff);
  }
  get percentDiff(): number | null {
    if (this.cost == null || this.cost == 0 || this.priceDiff == null) return null;
    return Math.round(this.priceDiff / this.cost * 10000) / 10000;
  }
  get percentDiffFormatted(): string {
    if (this.percentDiff == null) return ''
    return percentFormatter.format(this.percentDiff);
  }

  constructor(public code: string, public name: string,
    public price = 0, public cost: number | null = null) { }
}
