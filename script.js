// function drawSelectVariant(index) {
      //   let selectValue = $(`#selectVariant${index}`).val();

      //   // tag html untuk merender tabel ke 2 scope col
      //   const TempHtmlSelecValVariantCol = `<th scope="col">${selectValue}</th>`

      //   if (selectValue == "warna") {
      //     $(`#templateSelectVariant${index}`).html(DrawSelectWarna());
      //     $('.select-tabel-varian .table_variant thead tr').prepend(TempHtmlSelecValVariantCol)
      //   }

      //   else if (selectValue == 'ukuran') {
      //     $(`#templateSelectVariant${index}`).html(DrawSelectUkuran());
      //     $('.select-tabel-varian .table_variant thead tr').prepend(TempHtmlSelecValVariantCol)
      //   }

      //   // untuk mendapatkan value ketika user click salah satu data option yg sudah di sediakan
      //   $(".select-variant").on("select2:select", function (e) {
      //     const select_val = $(e.currentTarget).val();

      //     // tag html untuk merender tabel ke 2 scope row
      //     const TempHtmlSelecValVariantRow = `<th scope="row">${select_val}</th>`

      //     if (select_val == select_val) {
      //       return $('.select-tabel-varian .table_variant tbody tr').prepend(TempHtmlSelecValVariantRow)

      //     }
      //   });

      //   $(".select-variant").select2({
      //     placeholder: `Silahkan Pilih Varian`,
      //   });

      // }
