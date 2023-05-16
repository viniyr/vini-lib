export default {
    currency: {
      formatCurrency(number: number, showSymbol?: boolean): string {
        if (isNaN(number)) return "";
  
        const options = {
          style: "currency",
          currency: "BRL",
        };
  
        if (!showSymbol) {
          return new Intl.NumberFormat("en-US", options)
            .format(number)
            .replace(/([^\d])(\d[\d,.]*)/g, "$1 $2")
            .slice(2);
        }
  
        return new Intl.NumberFormat("en-US", options)
          .format(number)
          .replace(/([^\d])(\d[\d,.]*)/g, "$1 $2");
      },
      unformatCurrency(number: string) {
        number = number.toString().replace(/\D/g, ""); // remove all non-digits
        number = number.padStart(5, "0"); // pad with zeros to at least length 5
        var decimalPart = number.slice(-2); // extract last two digits as decimal part
        var integerPart = number.slice(0, -2); // extract the rest as integer part
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ""); // remove comma as thousands separator
        const newNumber = parseFloat(integerPart + "." + decimalPart); // combine integer and decimal parts and convert to number
        return newNumber;
      },
    },
    validators: {
      validateCPF(cpf: string) {
        cpf = cpf.replace(/[^\d]+/g, ""); // remove any non-digit character
        if (cpf == "") return false;
        // check length
        if (cpf.length != 11) return false;
  
        // check for repeated digits
        var repetitiousDigits = /(.)\1{10}/.test(cpf);
        if (repetitiousDigits) return false;
  
        // validate CPF algorithm
        var sum = 0;
        var factor = 10;
        for (var i = 0; i < 9; i++) {
          sum += parseInt(cpf.charAt(i)) * factor;
          factor--;
        }
  
        var remainder = (sum * 10) % 11;
        if (remainder == 10 || remainder == 11) remainder = 0;
        if (remainder != parseInt(cpf.charAt(9))) return false;
  
        sum = 0;
        factor = 11;
        for (var i = 0; i < 10; i++) {
          sum += parseInt(cpf.charAt(i)) * factor;
          factor--;
        }
  
        remainder = (sum * 10) % 11;
        if (remainder == 10 || remainder == 11) remainder = 0;
        if (remainder != parseInt(cpf.charAt(10))) return false;
  
        return true;
      },
      passwordValidator(password: string) {
        let progress = 0;
        if (password.length >= 6) {
          progress += 0.25;
        }
        if (password.match(RegExp("[^A-Za-z0-9]"))) {
          progress += 0.25;
        }
        return `${Math.max(0, progress) * 100}`;
      },
    },
    masks: {
      cpfMask(value: string) {
        var max_chars = 14;
  
        if (value.length > max_chars) {
          value = value.slice(0, max_chars);
        }
  
        return value
          .replace(/\D/g, "")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      },
      cpfUnmask(maskedCpf: string) {
        return maskedCpf.replace(".", "").replace(".", "").replace("-", "");
      },
      currencyMask(value: string) {
        if (value === "") {
          return 0;
        }
  
        value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
        const options = { minimumFractionDigits: 2 };
        const result = new Intl.NumberFormat("en-US", options).format(
          parseFloat(value) / 100
        );
  
        return result.replace(/\s/g, "");
      },
      dateMask(value: string) {
        const [yyyy, mm, dd, hh, mi] = value.split(/[/:\-T]/);

        return `${dd}/${mm}/${yyyy} ${hh}:${mi}`;
      },
      cellphoneMask(value: string) {
        let formattedNumber = "";
        const numbersOnly = value.replace(/[^\d]/g, "");
  
        if (numbersOnly.length > 0) {
          formattedNumber = `(${numbersOnly.slice(0, 2)}`;
        }
        if (numbersOnly.length > 2) {
          formattedNumber += `) ${numbersOnly.slice(2, 7)}`;
        }
        if (numbersOnly.length > 7) {
          formattedNumber += `-${numbersOnly.slice(7, 11)}`;
        }
  
        return formattedNumber;
      },
    },
    formatters: {
      stringToISODate(value: any): string {
        if (!value) return "";
  
        try {
          const splittedDate = value.split("/");
  
          const isoDate = new Date(
            +splittedDate[2],
            splittedDate[1] - 1,
            +splittedDate[0]
          ).toISOString();
  
          return isoDate;
        } catch (err: any) {
          return "Invalid date";
        }
      },
      constructURLGame(provider: string, name: string): string { 
        return `/games/${provider.toLocaleLowerCase().split(" ").join("-")}/${name.toLocaleLowerCase().split(" ").join("-")}`
      }
    },
  };
  