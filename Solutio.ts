 function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined || toUpper === null) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }


   function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }



   function processValue(value: string | number): number {
    if (typeof value == "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }


  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((max, curr) =>
      curr.price > max.price ? curr : max
    );
  }



  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }



async function squareAsync(n: number): Promise<number> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (n >= 0) {
          res(n * n);
        } else {
          rej(new Error("error as negative"));
        }
      }, 1000);
    });
  }
