import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  LoadSW01(): Observable<any> {
    let url = `${environment.apiURL}WetWipes/Read?form_no=0&table=TB_SW_01`;
    let r = this.http.get<any>(url);
    return r;
  }

  LoadSW(tableName: string): Observable<any> {
    let url = `${environment.apiURL}WetWipes/Read?form_no=0&table=${tableName}`;
    let r = this.http.get<any>(url);
    return r;
  }

  GetOrderList(): Observable<any> {
    let r = this.http.get<any>(`${environment.apiURL}WetWipes/GetOrdersList`);
    return r;
  }

  GetOrder(): Observable<any> {
    // let url = `${environment.apiURL}WetWipes/GetOrders`;
    // let r = this.http.post<any>( url, {
    //   "ie_lymd_after": "2023-10-01",
    //   "ie_lymd_before": "2023-10-20"
    // });
    // return r;

    return of([
      {
          "sc_odno": "2308140201",
          "od_no": "230814",
          "el_no": "6CP",
          "sc_qty": 207.0000,
          "sc_qty1": 207.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "2308140202",
          "od_no": "230814",
          "el_no": "6PE1",
          "sc_qty": 207.0000,
          "sc_qty1": 207.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "2309070101",
          "od_no": "230907",
          "el_no": "6CP",
          "sc_qty": 550.0000,
          "sc_qty1": 550.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300205001",
          "od_no": "300205",
          "el_no": "5EPENXX018EB0007800",
          "sc_qty": 14320.8000,
          "sc_qty1": 204.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300205002",
          "od_no": "300205",
          "el_no": "4EPENXX018ZZ0023800",
          "sc_qty": 14711.2560,
          "sc_qty1": 68.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300206001",
          "od_no": "300206",
          "el_no": "5EPENXX018EB0006500",
          "sc_qty": 11934.0000,
          "sc_qty1": 204.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300206002",
          "od_no": "300206",
          "el_no": "4EPENXX018ZZ0019900",
          "sc_qty": 12300.5880,
          "sc_qty1": 68.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300208001",
          "od_no": "300208",
          "el_no": "5EPENXX017EB000240B",
          "sc_qty": 2448.0000,
          "sc_qty1": 120.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300208002",
          "od_no": "300208",
          "el_no": "4EPENXX017EB002200B",
          "sc_qty": 2644.1800,
          "sc_qty1": 14.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300209001",
          "od_no": "300209",
          "el_no": "5EPENXX017EB0002000",
          "sc_qty": 3400.0000,
          "sc_qty1": 200.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300209002",
          "od_no": "300209",
          "el_no": "4EPENXX017ZZ0022400",
          "sc_qty": 3653.7760,
          "sc_qty1": 19.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300211001",
          "od_no": "300211",
          "el_no": "5EPENXX018EB0007800",
          "sc_qty": 21481.2000,
          "sc_qty1": 306.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "300211002",
          "od_no": "300211",
          "el_no": "4EPENXX018ZZ0023800",
          "sc_qty": 22066.8840,
          "sc_qty1": 102.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A56893003",
          "od_no": "A56893",
          "el_no": "5GBRF7045017XX05060C",
          "sc_qty": 36936.0000,
          "sc_qty1": 4800.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A57015003",
          "od_no": "A57015",
          "el_no": "5GBRF7045017XX03260C",
          "sc_qty": 22464.0000,
          "sc_qty1": 2600.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A58585003",
          "od_no": "A58585",
          "el_no": "5GBRF7045017XX05060C",
          "sc_qty": 30348.0000,
          "sc_qty1": 3950.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A58896003",
          "od_no": "A58896",
          "el_no": "5GBRF7045017XX05060A",
          "sc_qty": 31225.5000,
          "sc_qty1": 4150.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A59831003",
          "od_no": "A59831",
          "el_no": "4TBRF7045017XX4530WZ",
          "sc_qty": 24462.0000,
          "sc_qty1": 15.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60348001",
          "od_no": "A60348",
          "el_no": "5NCR03035000XX0297WA",
          "sc_qty": 35259.8400,
          "sc_qty1": 640.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60348002",
          "od_no": "A60348",
          "el_no": "4NCR03035000XX4700WZ",
          "sc_qty": 37022.7615,
          "sc_qty1": 21.2323,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60841001",
          "od_no": "A60841",
          "el_no": "5LPNLXU024OA000225H",
          "sc_qty": 1036.8000,
          "sc_qty1": 64.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60841002",
          "od_no": "A60841",
          "el_no": "4LPNLXU024OA0015950",
          "sc_qty": 4300.0000,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60841003",
          "od_no": "A60841",
          "el_no": "5EPENXX011ZZ0016150",
          "sc_qty": 550.7150,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60842001",
          "od_no": "A60842",
          "el_no": "5EPENXX022ZZ0001700",
          "sc_qty": 2872.3200,
          "sc_qty1": 96.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60842002",
          "od_no": "A60842",
          "el_no": "4EPENXX022ZZ0023800",
          "sc_qty": 3371.9840,
          "sc_qty1": 8.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60843001",
          "od_no": "A60843",
          "el_no": "5EPENXX022ZZ0002250",
          "sc_qty": 950.4000,
          "sc_qty1": 24.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60843002",
          "od_no": "A60843",
          "el_no": "4EPENXX022ZZ0023800",
          "sc_qty": 1264.4940,
          "sc_qty1": 3.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60844001",
          "od_no": "A60844",
          "el_no": "5EPDNXX022OA000170S",
          "sc_qty": 6758.4000,
          "sc_qty1": 288.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60844002",
          "od_no": "A60844",
          "el_no": "4EPDNXX022ZZ002250S",
          "sc_qty": 3187.8000,
          "sc_qty1": 8.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60845001",
          "od_no": "A60845",
          "el_no": "5EPDNXX022OA000115S",
          "sc_qty": 3886.0800,
          "sc_qty1": 192.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60845002",
          "od_no": "A60845",
          "el_no": "4EPDNXX022ZZ002230S",
          "sc_qty": 3949.3300,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60846001",
          "od_no": "A60846",
          "el_no": "5EPDFXX025OA0100900",
          "sc_qty": 2808.0000,
          "sc_qty1": 192.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60846002",
          "od_no": "A60846",
          "el_no": "4EPDFXX025OA0118400",
          "sc_qty": 2793.0000,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60847001",
          "od_no": "A60847",
          "el_no": "5EPDFXX025OA0102800",
          "sc_qty": 2912.0000,
          "sc_qty1": 64.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60847002",
          "od_no": "A60847",
          "el_no": "4EPDFXX025OA0117200",
          "sc_qty": 3050.0000,
          "sc_qty1": 11.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60848001",
          "od_no": "A60848",
          "el_no": "5LPNLXU024OA000225H",
          "sc_qty": 2592.0000,
          "sc_qty1": 160.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60848002",
          "od_no": "A60848",
          "el_no": "4LPNLXU024OA0015950",
          "sc_qty": 2650.0000,
          "sc_qty1": 23.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60848003",
          "od_no": "A60848",
          "el_no": "5EPENXX011ZZ0016150",
          "sc_qty": 1266.6445,
          "sc_qty1": 23.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60850001",
          "od_no": "A60850",
          "el_no": "5EPENXX022ZZ0000901",
          "sc_qty": 1774.0800,
          "sc_qty1": 112.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60850002",
          "od_no": "A60850",
          "el_no": "4EPENXX022ZZ0023800",
          "sc_qty": 2107.4900,
          "sc_qty1": 5.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60851001",
          "od_no": "A60851",
          "el_no": "5EPENXX022ZZ0001700",
          "sc_qty": 3829.7600,
          "sc_qty1": 128.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60851002",
          "od_no": "A60851",
          "el_no": "4EPENXX022ZZ0023800",
          "sc_qty": 4214.9800,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60852001",
          "od_no": "A60852",
          "el_no": "5EPDNXX022OA000170S",
          "sc_qty": 8616.9600,
          "sc_qty1": 288.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A60852002",
          "od_no": "A60852",
          "el_no": "4EPDNXX022ZZ002250S",
          "sc_qty": 9164.9250,
          "sc_qty1": 23.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61319001",
          "od_no": "A61319",
          "el_no": "5LPELXU030KO0603101",
          "sc_qty": 13392.0000,
          "sc_qty1": 480.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61319002",
          "od_no": "A61319",
          "el_no": "4LPELXU030KO0616501",
          "sc_qty": 14493.6000,
          "sc_qty1": 96.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61319003",
          "od_no": "A61319",
          "el_no": "5FPEFXX018KO0616501",
          "sc_qty": 8838.7200,
          "sc_qty1": 96.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61319004",
          "od_no": "A61319",
          "el_no": "5EPEFXX018KO0016500",
          "sc_qty": 8981.2800,
          "sc_qty1": 96.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61465001",
          "od_no": "A61465",
          "el_no": "5NCRF6035000XX0400WA",
          "sc_qty": 10416.0000,
          "sc_qty1": 186.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61465002",
          "od_no": "A61465",
          "el_no": "4NCRF6035000XX4500WZ",
          "sc_qty": 11321.0000,
          "sc_qty1": 11.4853,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61490001",
          "od_no": "A61490",
          "el_no": "5LPELXU028PI0001451",
          "sc_qty": 5261.7600,
          "sc_qty1": 288.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61490002",
          "od_no": "A61490",
          "el_no": "4LPELXU028PI0018000",
          "sc_qty": 5443.2000,
          "sc_qty1": 24.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61490003",
          "od_no": "A61490",
          "el_no": "5EPEFXX016PI0018000",
          "sc_qty": 3144.9600,
          "sc_qty1": 24.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61508001",
          "od_no": "A61508",
          "el_no": "5GBRF7045017XX03260C",
          "sc_qty": 36288.0000,
          "sc_qty1": 4200.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61528002",
          "od_no": "A61528",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 5147.0000,
          "sc_qty1": 4.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61529001",
          "od_no": "A61529",
          "el_no": "5NDR050380F6XX1330WA",
          "sc_qty": 32562.0000,
          "sc_qty1": 150.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61529002",
          "od_no": "A61529",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 18714.6800,
          "sc_qty1": 14.1905,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61530002",
          "od_no": "A61530",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 1657.7400,
          "sc_qty1": 1.1602,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61531002",
          "od_no": "A61531",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 2900.9400,
          "sc_qty1": 2.0303,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61532002",
          "od_no": "A61532",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 4736.4000,
          "sc_qty1": 3.3149,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61533001",
          "od_no": "A61533",
          "el_no": "5NDR050380F6XX1330WA",
          "sc_qty": 13024.8000,
          "sc_qty1": 60.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61533002",
          "od_no": "A61533",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 13024.8000,
          "sc_qty1": 9.1159,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61645001",
          "od_no": "A61645",
          "el_no": "5EPEFXX038KN0000862",
          "sc_qty": 3235.3200,
          "sc_qty1": 198.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61645002",
          "od_no": "A61645",
          "el_no": "4EPEFXX038KN0019601",
          "sc_qty": 3385.1160,
          "sc_qty1": 9.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61647001",
          "od_no": "A61647",
          "el_no": "5FPEFXX018KA0801602",
          "sc_qty": 13996.8000,
          "sc_qty1": 1080.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61647003",
          "od_no": "A61647",
          "el_no": "5EPEFXX018KA0019603",
          "sc_qty": 14669.4240,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61676001",
          "od_no": "A61676",
          "el_no": "5FPEFXX018KA0801602",
          "sc_qty": 13996.8000,
          "sc_qty1": 1080.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61676002",
          "od_no": "A61676",
          "el_no": "4FPEFXX018KA0819605",
          "sc_qty": 14351.9359,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61676003",
          "od_no": "A61676",
          "el_no": "5EPEFXX018KA0019603",
          "sc_qty": 14669.4240,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61707001",
          "od_no": "A61707",
          "el_no": "5EPEFXX020PI0001301",
          "sc_qty": 9360.0000,
          "sc_qty1": 600.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61707002",
          "od_no": "A61707",
          "el_no": "4EPEFXX020PI0019901",
          "sc_qty": 9631.6000,
          "sc_qty1": 40.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61708001",
          "od_no": "A61708",
          "el_no": "5EPEFXX038SL0001700",
          "sc_qty": 23256.0000,
          "sc_qty1": 1800.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61708002",
          "od_no": "A61708",
          "el_no": "4EPEFXX038SL0019100",
          "sc_qty": 24401.3960,
          "sc_qty1": 164.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61720001",
          "od_no": "A61720",
          "el_no": "5FPEFXX018KA0801602",
          "sc_qty": 13996.8000,
          "sc_qty1": 1080.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61720002",
          "od_no": "A61720",
          "el_no": "4FPEFXX018KA0819605",
          "sc_qty": 14351.9359,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61720003",
          "od_no": "A61720",
          "el_no": "5EPEFXX018KA0019603",
          "sc_qty": 14669.4240,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61738001",
          "od_no": "A61738",
          "el_no": "5EPEFXX038KN0000862",
          "sc_qty": 3235.3200,
          "sc_qty1": 198.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61738002",
          "od_no": "A61738",
          "el_no": "4EPEFXX038KN0019601",
          "sc_qty": 3385.1160,
          "sc_qty1": 9.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61757001",
          "od_no": "A61757",
          "el_no": "5NCR06555000XX0200WA",
          "sc_qty": 9009.0000,
          "sc_qty1": 273.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61757002",
          "od_no": "A61757",
          "el_no": "4NCR06555000XX4500WZ",
          "sc_qty": 9459.4500,
          "sc_qty1": 6.3700,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61773001",
          "od_no": "A61773",
          "el_no": "5FPEFXX016KA0101601",
          "sc_qty": 13824.0000,
          "sc_qty1": 1080.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61773002",
          "od_no": "A61773",
          "el_no": "4FPEFXX016KA0119601",
          "sc_qty": 14168.4300,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61773003",
          "od_no": "A61773",
          "el_no": "5EPEFXX016KA0019601",
          "sc_qty": 14450.6880,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61800001",
          "od_no": "A61800",
          "el_no": "5EPEFXX018DW0003704",
          "sc_qty": 11328.6600,
          "sc_qty1": 378.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61800002",
          "od_no": "A61800",
          "el_no": "4EPEFXX018ZZ0018904",
          "sc_qty": 11900.0000,
          "sc_qty1": 76.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61843001",
          "od_no": "A61843",
          "el_no": "5NCRE7063000XX0390WA",
          "sc_qty": 2162.1600,
          "sc_qty1": 110.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61843002",
          "od_no": "A61843",
          "el_no": "4NCRE7063000XX4730WZ",
          "sc_qty": 2162.1600,
          "sc_qty1": 0.9070,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61851001",
          "od_no": "A61851",
          "el_no": "5EPENXX017EB0002000",
          "sc_qty": 2040.0000,
          "sc_qty1": 120.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61851002",
          "od_no": "A61851",
          "el_no": "4EPENXX017ZZ0022400",
          "sc_qty": 2115.3440,
          "sc_qty1": 11.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61852001",
          "od_no": "A61852",
          "el_no": "5EPENXX017EB0002400",
          "sc_qty": 1224.0000,
          "sc_qty1": 60.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61852002",
          "od_no": "A61852",
          "el_no": "4EPENXX017ZZ0022000",
          "sc_qty": 1699.8300,
          "sc_qty1": 9.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61853001",
          "od_no": "A61853",
          "el_no": "5EPENXX017EB000200B",
          "sc_qty": 2040.0000,
          "sc_qty1": 120.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61853002",
          "od_no": "A61853",
          "el_no": "4EPENXX017EB002240B",
          "sc_qty": 2115.3440,
          "sc_qty1": 11.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61854001",
          "od_no": "A61854",
          "el_no": "5EPENXX017EB000240B",
          "sc_qty": 1224.0000,
          "sc_qty1": 60.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61854002",
          "od_no": "A61854",
          "el_no": "4EPENXX017EB002200B",
          "sc_qty": 1322.0900,
          "sc_qty1": 7.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61855001",
          "od_no": "A61855",
          "el_no": "5EPENXX018EB0006500",
          "sc_qty": 5967.0000,
          "sc_qty1": 102.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61855002",
          "od_no": "A61855",
          "el_no": "4EPENXX018ZZ0019900",
          "sc_qty": 6150.2940,
          "sc_qty1": 34.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61856001",
          "od_no": "A61856",
          "el_no": "5EPENXX018EB0007800",
          "sc_qty": 7160.4000,
          "sc_qty1": 102.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61856002",
          "od_no": "A61856",
          "el_no": "4EPENXX018ZZ0023800",
          "sc_qty": 7355.6280,
          "sc_qty1": 34.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61863002",
          "od_no": "A61863",
          "el_no": "4NCRE6040000XX4500WZ",
          "sc_qty": 22969.8000,
          "sc_qty1": 17.1275,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61868001",
          "od_no": "A61868",
          "el_no": "5EPEFXX018DW0004754",
          "sc_qty": 9618.7500,
          "sc_qty1": 250.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61868002",
          "od_no": "A61868",
          "el_no": "4EPEFXX018ZZ0019404",
          "sc_qty": 10009.8180,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61869002",
          "od_no": "A61869",
          "el_no": "5NBRF7070006XX0320WA",
          "sc_qty": 3261.4400,
          "sc_qty1": 104.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61869003",
          "od_no": "A61869",
          "el_no": "4NBRF7070006XX4500WZ",
          "sc_qty": 6615.0000,
          "sc_qty1": 3.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61872002",
          "od_no": "A61872",
          "el_no": "4NCRF6035000XX4500WZ",
          "sc_qty": 10936.8000,
          "sc_qty1": 8.2667,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61873002",
          "od_no": "A61873",
          "el_no": "4NCRF6035000XX4500WZ",
          "sc_qty": 10936.8000,
          "sc_qty1": 8.2667,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61874001",
          "od_no": "A61874",
          "el_no": "5NCR05030000XX0190WA",
          "sc_qty": 16265.5200,
          "sc_qty1": 696.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61874002",
          "od_no": "A61874",
          "el_no": "4NCR05030000XX4730WZ",
          "sc_qty": 19925.5980,
          "sc_qty1": 17.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61875001",
          "od_no": "A61875",
          "el_no": "5NCR05030000XX0190WA",
          "sc_qty": 16265.5200,
          "sc_qty1": 696.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61875002",
          "od_no": "A61875",
          "el_no": "4NCR05030000XX4730WZ",
          "sc_qty": 31643.8290,
          "sc_qty1": 26.7051,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61876001",
          "od_no": "A61876",
          "el_no": "5NCR05030000XA0980WA",
          "sc_qty": 16228.8000,
          "sc_qty1": 184.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61876002",
          "od_no": "A61876",
          "el_no": "4NCR05030000XA4430WZ",
          "sc_qty": 18152.7120,
          "sc_qty1": 16.0137,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61878001",
          "od_no": "A61878",
          "el_no": "5EPDFXX025OA0100900",
          "sc_qty": 2808.0000,
          "sc_qty1": 192.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61878002",
          "od_no": "A61878",
          "el_no": "4EPDFXX025OA0118400",
          "sc_qty": 2823.4800,
          "sc_qty1": 9.3000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61881001",
          "od_no": "A61881",
          "el_no": "5EPENXX022ZZ0001700",
          "sc_qty": 4787.2000,
          "sc_qty1": 160.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61882001",
          "od_no": "A61882",
          "el_no": "5EPDNXX022OA000170S",
          "sc_qty": 6702.0800,
          "sc_qty1": 224.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61882002",
          "od_no": "A61882",
          "el_no": "4EPDNXX022ZZ002250S",
          "sc_qty": 7172.5500,
          "sc_qty1": 18.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61888001",
          "od_no": "A61888",
          "el_no": "5EPEFXX018DW0003704",
          "sc_qty": 16183.8000,
          "sc_qty1": 540.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61888002",
          "od_no": "A61888",
          "el_no": "4EPEFXX018ZZ0018904",
          "sc_qty": 16717.4280,
          "sc_qty1": 108.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61889001",
          "od_no": "A61889",
          "el_no": "5EPEFXX018DW0002005",
          "sc_qty": 2187.0000,
          "sc_qty1": 135.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61889002",
          "od_no": "A61889",
          "el_no": "4EPEFXX018ZZ0018405",
          "sc_qty": 2260.4400,
          "sc_qty1": 15.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61890001",
          "od_no": "A61890",
          "el_no": "5EPEFXX018DW0003704",
          "sc_qty": 6473.5200,
          "sc_qty1": 216.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61890002",
          "od_no": "A61890",
          "el_no": "4EPEFXX018ZZ0018904",
          "sc_qty": 6700.0000,
          "sc_qty1": 44.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61891001",
          "od_no": "A61891",
          "el_no": "5EPEFXX018DW0004754",
          "sc_qty": 21930.7500,
          "sc_qty1": 570.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61891002",
          "od_no": "A61891",
          "el_no": "4EPEFXX018ZZ0019404",
          "sc_qty": 22720.6980,
          "sc_qty1": 143.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61892001",
          "od_no": "A61892",
          "el_no": "5EPEFXX018DW0001905",
          "sc_qty": 5001.7500,
          "sc_qty1": 325.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61892002",
          "od_no": "A61892",
          "el_no": "4EPEFXX018ZZ0019405",
          "sc_qty": 5243.2380,
          "sc_qty1": 33.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61893001",
          "od_no": "A61893",
          "el_no": "5EPEFXX018DW0003764",
          "sc_qty": 12334.6800,
          "sc_qty1": 405.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61893002",
          "od_no": "A61893",
          "el_no": "4EPEFXX018ZZ0019204",
          "sc_qty": 12737.0880,
          "sc_qty1": 81.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61897001",
          "od_no": "A61897",
          "el_no": "5EPEFXX018DW0002005",
          "sc_qty": 3061.8000,
          "sc_qty1": 189.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61897002",
          "od_no": "A61897",
          "el_no": "4EPEFXX018ZZ0018405",
          "sc_qty": 3164.6160,
          "sc_qty1": 21.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61898001",
          "od_no": "A61898",
          "el_no": "5EPEFXX018DW0003704",
          "sc_qty": 14565.4200,
          "sc_qty1": 486.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61898002",
          "od_no": "A61898",
          "el_no": "4EPEFXX018ZZ0018904",
          "sc_qty": 15170.0000,
          "sc_qty1": 98.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61901001",
          "od_no": "A61901",
          "el_no": "5EPEFXX018DW0003704",
          "sc_qty": 1618.3800,
          "sc_qty1": 54.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61901002",
          "od_no": "A61901",
          "el_no": "4EPEFXX018ZZ0018904",
          "sc_qty": 1702.7010,
          "sc_qty1": 11.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61902001",
          "od_no": "A61902",
          "el_no": "5EPEFXX018DW0003764",
          "sc_qty": 9045.4320,
          "sc_qty1": 297.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61902002",
          "od_no": "A61902",
          "el_no": "4EPEFXX018ZZ0019204",
          "sc_qty": 9592.2470,
          "sc_qty1": 60.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61903001",
          "od_no": "A61903",
          "el_no": "5EPEFXX018DW0004754",
          "sc_qty": 9003.1500,
          "sc_qty1": 234.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61903002",
          "od_no": "A61903",
          "el_no": "4EPEFXX018ZZ0019404",
          "sc_qty": 9374.2740,
          "sc_qty1": 59.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61904001",
          "od_no": "A61904",
          "el_no": "5EPEFXX018DW0001905",
          "sc_qty": 2200.7700,
          "sc_qty1": 143.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61904002",
          "od_no": "A61904",
          "el_no": "4EPEFXX018ZZ0019405",
          "sc_qty": 2383.2900,
          "sc_qty1": 15.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61905001",
          "od_no": "A61905",
          "el_no": "5LPNLXU024OA000225H",
          "sc_qty": 2592.0000,
          "sc_qty1": 160.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61905002",
          "od_no": "A61905",
          "el_no": "4LPNLXU024OA0015950",
          "sc_qty": 2700.0000,
          "sc_qty1": 23.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61905003",
          "od_no": "A61905",
          "el_no": "5EPENXX011ZZ0016150",
          "sc_qty": 1266.6445,
          "sc_qty1": 23.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61917002",
          "od_no": "A61917",
          "el_no": "4FPEFXX018KA0819606",
          "sc_qty": 5740.7616,
          "sc_qty1": 36.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61928003",
          "od_no": "A61928",
          "el_no": "5EPEFXX018KA0019603",
          "sc_qty": 5867.7696,
          "sc_qty1": 36.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61935001",
          "od_no": "A61935",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61936001",
          "od_no": "A61936",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61936002",
          "od_no": "A61936",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61937001",
          "od_no": "A61937",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61937002",
          "od_no": "A61937",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61937003",
          "od_no": "A61937",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7085.4912,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61938001",
          "od_no": "A61938",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61938002",
          "od_no": "A61938",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61938003",
          "od_no": "A61938",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7085.4912,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61939001",
          "od_no": "A61939",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61939002",
          "od_no": "A61939",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61939003",
          "od_no": "A61939",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7085.4912,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61940001",
          "od_no": "A61940",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61940002",
          "od_no": "A61940",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61940003",
          "od_no": "A61940",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7085.4912,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61941001",
          "od_no": "A61941",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61941002",
          "od_no": "A61941",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61941003",
          "od_no": "A61941",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7085.4912,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61942001",
          "od_no": "A61942",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61942002",
          "od_no": "A61942",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61942003",
          "od_no": "A61942",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7085.4912,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61946001",
          "od_no": "A61946",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61946002",
          "od_no": "A61946",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16532.8128,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61946003",
          "od_no": "A61946",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7085.4912,
          "sc_qty1": 32.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61947001",
          "od_no": "A61947",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61947002",
          "od_no": "A61947",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61947003",
          "od_no": "A61947",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61948001",
          "od_no": "A61948",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61948002",
          "od_no": "A61948",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61948003",
          "od_no": "A61948",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61949001",
          "od_no": "A61949",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61949002",
          "od_no": "A61949",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61949003",
          "od_no": "A61949",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61950001",
          "od_no": "A61950",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61950002",
          "od_no": "A61950",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61950003",
          "od_no": "A61950",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61951001",
          "od_no": "A61951",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61951002",
          "od_no": "A61951",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61951003",
          "od_no": "A61951",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61952001",
          "od_no": "A61952",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61952002",
          "od_no": "A61952",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61952003",
          "od_no": "A61952",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61953001",
          "od_no": "A61953",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61953002",
          "od_no": "A61953",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61953003",
          "od_no": "A61953",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61954001",
          "od_no": "A61954",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 15709.4280,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61954002",
          "od_no": "A61954",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 16274.4876,
          "sc_qty1": 31.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61954003",
          "od_no": "A61954",
          "el_no": "5EPEFXX024TC041530B3",
          "sc_qty": 7009.4808,
          "sc_qty1": 31.6567,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61956001",
          "od_no": "A61956",
          "el_no": "5LPELXU056TC0407431H",
          "sc_qty": 3740.3400,
          "sc_qty1": 15.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61956002",
          "od_no": "A61956",
          "el_no": "4LPELXU056TC0415300H",
          "sc_qty": 3874.8780,
          "sc_qty1": 7.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61960001",
          "od_no": "A61960",
          "el_no": "5NCR05060000XX0508WC",
          "sc_qty": 9520.1496,
          "sc_qty1": 104.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61960002",
          "od_no": "A61960",
          "el_no": "4NCR05060000XX4470WZ",
          "sc_qty": 9996.1895,
          "sc_qty1": 6.2119,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61961001",
          "od_no": "A61961",
          "el_no": "5NCR05030000XX0673WA",
          "sc_qty": 5635.1212,
          "sc_qty1": 68.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61961002",
          "od_no": "A61961",
          "el_no": "4NCR05030000XX4500WZ",
          "sc_qty": 5916.8485,
          "sc_qty1": 4.6288,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61962002",
          "od_no": "A61962",
          "el_no": "4NCR05030000XX4500WZ",
          "sc_qty": 2959.7707,
          "sc_qty1": 2.7405,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61973001",
          "od_no": "A61973",
          "el_no": "5FPEFXX018KA0801602",
          "sc_qty": 13996.8000,
          "sc_qty1": 1080.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61973002",
          "od_no": "A61973",
          "el_no": "4FPEFXX018KA0819605",
          "sc_qty": 14351.9040,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61973003",
          "od_no": "A61973",
          "el_no": "5EPEFXX018KA0019603",
          "sc_qty": 14669.4240,
          "sc_qty1": 90.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61974001",
          "od_no": "A61974",
          "el_no": "5FPEFXX018KA0801603",
          "sc_qty": 5598.7200,
          "sc_qty1": 432.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A61992002",
          "od_no": "A61992",
          "el_no": "4TBRH6035016XX4470WZ",
          "sc_qty": 38290.5600,
          "sc_qty1": 30.5933,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62008002",
          "od_no": "A62008",
          "el_no": "4TBR07060017XX4450WZ",
          "sc_qty": 9072.0000,
          "sc_qty1": 4.2472,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62011002",
          "od_no": "A62011",
          "el_no": "4TBR06070017XX4450WZ",
          "sc_qty": 9306.2760,
          "sc_qty1": 3.7345,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62013001",
          "od_no": "A62013",
          "el_no": "5NCR05055000XX0200WA",
          "sc_qty": 6144.6000,
          "sc_qty1": 294.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62013002",
          "od_no": "A62013",
          "el_no": "4NCR05055000XX4700WZ",
          "sc_qty": 6451.7464,
          "sc_qty1": 2.6272,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62015001",
          "od_no": "A62015",
          "el_no": "5NCRE7060000XX0200WA",
          "sc_qty": 6210.0000,
          "sc_qty1": 249.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62015002",
          "od_no": "A62015",
          "el_no": "4NCRE7060000XX4730WZ",
          "sc_qty": 13000.0000,
          "sc_qty1": 4.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62027001",
          "od_no": "A62027",
          "el_no": "5NDR050380F6XX1330WB",
          "sc_qty": 68618.8800,
          "sc_qty1": 288.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62027002",
          "od_no": "A62027",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 66279.6000,
          "sc_qty1": 46.3883,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62028002",
          "od_no": "A62028",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 24432.4800,
          "sc_qty1": 17.1000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62029001",
          "od_no": "A62029",
          "el_no": "5NDR050380F6XX1330WB",
          "sc_qty": 91491.8400,
          "sc_qty1": 384.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62029002",
          "od_no": "A62029",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 64323.6800,
          "sc_qty1": 35.7277,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62030002",
          "od_no": "A62030",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 1039.6800,
          "sc_qty1": 0.7277,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62044001",
          "od_no": "A62044",
          "el_no": "5EPEFXX018OM0000851",
          "sc_qty": 21542.4000,
          "sc_qty1": 1408.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62044002",
          "od_no": "A62044",
          "el_no": "4EPEFXX018OM0019101",
          "sc_qty": 22223.2320,
          "sc_qty1": 64.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62052001",
          "od_no": "A62052",
          "el_no": "5FPEFXX014EB0104400",
          "sc_qty": 1971.2000,
          "sc_qty1": 40.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62052002",
          "od_no": "A62052",
          "el_no": "4FPEFXX014EB0118100",
          "sc_qty": 2039.8700,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62052003",
          "od_no": "A62052",
          "el_no": "5EPEFXX014ZZ0018100",
          "sc_qty": 2065.2100,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62053001",
          "od_no": "A62053",
          "el_no": "5FPEFXX014EB0205100",
          "sc_qty": 2284.8000,
          "sc_qty1": 40.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62053002",
          "od_no": "A62053",
          "el_no": "4FPEFXX014EB0215800",
          "sc_qty": 2492.9240,
          "sc_qty1": 14.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62053003",
          "od_no": "A62053",
          "el_no": "5EPEFXX014ZZ0015800",
          "sc_qty": 2523.8920,
          "sc_qty1": 14.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62117002",
          "od_no": "A62117",
          "el_no": "4TCR05038000XX4500WZ",
          "sc_qty": 3283.2000,
          "sc_qty1": 2.4000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62118001",
          "od_no": "A62118",
          "el_no": "5EPEFXX018OM0000851",
          "sc_qty": 21542.4000,
          "sc_qty1": 1408.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62118002",
          "od_no": "A62118",
          "el_no": "4EPEFXX018OM0019101",
          "sc_qty": 22223.2320,
          "sc_qty1": 64.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62120001",
          "od_no": "A62120",
          "el_no": "5EPEFXX018OM0000851",
          "sc_qty": 21542.4000,
          "sc_qty1": 1408.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62148001",
          "od_no": "A62148",
          "el_no": "5EPENXX017EB0002400",
          "sc_qty": 1224.0000,
          "sc_qty1": 60.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62148002",
          "od_no": "A62148",
          "el_no": "4EPENXX017ZZ0022000",
          "sc_qty": 1699.8300,
          "sc_qty1": 9.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62149001",
          "od_no": "A62149",
          "el_no": "5EPENXX017EB0006000",
          "sc_qty": 3060.0000,
          "sc_qty1": 60.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62150001",
          "od_no": "A62150",
          "el_no": "5EPENXX017EB000200B",
          "sc_qty": 1020.0000,
          "sc_qty1": 60.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62150002",
          "od_no": "A62150",
          "el_no": "4EPENXX017EB002240B",
          "sc_qty": 3653.7760,
          "sc_qty1": 19.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62151001",
          "od_no": "A62151",
          "el_no": "5EPEFXX014EB0004400",
          "sc_qty": 1971.2000,
          "sc_qty1": 40.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62151002",
          "od_no": "A62151",
          "el_no": "4EPEFXX014ZZ0018100",
          "sc_qty": 2039.8700,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62170002",
          "od_no": "A62170",
          "el_no": "4TDR05080000XX4530WZ",
          "sc_qty": 30602.8800,
          "sc_qty1": 10.5556,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62187001",
          "od_no": "A62187",
          "el_no": "5NCRF6035000XX0400WA",
          "sc_qty": 31248.0000,
          "sc_qty1": 558.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62187002",
          "od_no": "A62187",
          "el_no": "4NCRF6035000XX4500WZ",
          "sc_qty": 24813.6093,
          "sc_qty1": 58.4617,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62188001",
          "od_no": "A62188",
          "el_no": "5NCRF6035000XX0400WA",
          "sc_qty": 20832.0000,
          "sc_qty1": 372.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62188002",
          "od_no": "A62188",
          "el_no": "4NCRF6035000XX4500WZ",
          "sc_qty": 21936.8000,
          "sc_qty1": 18.2667,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62214002",
          "od_no": "A62214",
          "el_no": "4NCRE6040000XX4500WZ",
          "sc_qty": 5556.6000,
          "sc_qty1": 4.4100,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62225002",
          "od_no": "A62225",
          "el_no": "4TBRE0050017XX4500WZ",
          "sc_qty": 682.5000,
          "sc_qty1": 0.3792,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62243002",
          "od_no": "A62243",
          "el_no": "4TDRL00650R1XX4400WZ",
          "sc_qty": 3557.0535,
          "sc_qty1": 1.5547,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62244002",
          "od_no": "A62244",
          "el_no": "4TDRL00650R1XX4400WZ",
          "sc_qty": 3387.6700,
          "sc_qty1": 1.4806,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62249002",
          "od_no": "A62249",
          "el_no": "4TBR05030017XX4500WZ",
          "sc_qty": 5954.6700,
          "sc_qty1": 5.5136,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62308001",
          "od_no": "A62308",
          "el_no": "5NCR00045000XX1070WA",
          "sc_qty": 6366.6000,
          "sc_qty1": 63.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62308002",
          "od_no": "A62308",
          "el_no": "4NCR00045000XX4500WZ",
          "sc_qty": 6684.9300,
          "sc_qty1": 4.1265,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62309002",
          "od_no": "A62309",
          "el_no": "4NCR00045000XX4500WZ",
          "sc_qty": 1224.7200,
          "sc_qty1": 0.7560,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62318001",
          "od_no": "A62318",
          "el_no": "5EPENXX017EB0002000",
          "sc_qty": 3060.0000,
          "sc_qty1": 180.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62318002",
          "od_no": "A62318",
          "el_no": "4EPENXX017ZZ0022400",
          "sc_qty": 1923.0400,
          "sc_qty1": 10.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62319001",
          "od_no": "A62319",
          "el_no": "5EPENXX017EB0004700",
          "sc_qty": 4794.0000,
          "sc_qty1": 120.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62319002",
          "od_no": "A62319",
          "el_no": "4EPENXX017ZZ0023800",
          "sc_qty": 4903.7520,
          "sc_qty1": 24.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62347002",
          "od_no": "A62347",
          "el_no": "4NCR03543000XX4400WZ",
          "sc_qty": 27033.6528,
          "sc_qty1": 17.8605,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62348002",
          "od_no": "A62348",
          "el_no": "4NCR03543000XX4400WZ",
          "sc_qty": 27033.6528,
          "sc_qty1": 17.8605,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62355002",
          "od_no": "A62355",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 24952.3200,
          "sc_qty1": 17.4638,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62357002",
          "od_no": "A62357",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 33269.7600,
          "sc_qty1": 23.2851,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62387002",
          "od_no": "A62387",
          "el_no": "4NCRE6040000XX4500WZ",
          "sc_qty": 11113.2000,
          "sc_qty1": 7.7175,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62416002",
          "od_no": "A62416",
          "el_no": "4TCR03035000XX4500WZ",
          "sc_qty": 2346.1200,
          "sc_qty1": 1.9600,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62417002",
          "od_no": "A62417",
          "el_no": "4TCR03035000XX4500WZ",
          "sc_qty": 2873.9970,
          "sc_qty1": 2.4010,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62418001",
          "od_no": "A62418",
          "el_no": "5NCR05050000XX0200WD",
          "sc_qty": 1670.0000,
          "sc_qty1": 84.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62420002",
          "od_no": "A62420",
          "el_no": "4NDR050380F6XX4700WZ",
          "sc_qty": 7104.6000,
          "sc_qty1": 4.9724,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62429001",
          "od_no": "A62429",
          "el_no": "5NCR06555000XX0200WA",
          "sc_qty": 27027.0000,
          "sc_qty1": 819.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62429002",
          "od_no": "A62429",
          "el_no": "4NCR06555000XX4500WZ",
          "sc_qty": 28378.3500,
          "sc_qty1": 15.9250,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62430002",
          "od_no": "A62430",
          "el_no": "4NCR06555000XX4500WZ",
          "sc_qty": 9459.4500,
          "sc_qty1": 4.7775,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62431002",
          "od_no": "A62431",
          "el_no": "4NCR06555000XX4500WZ",
          "sc_qty": 9459.4500,
          "sc_qty1": 4.7775,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62432001",
          "od_no": "A62432",
          "el_no": "5NCRF7350000XX0260WA",
          "sc_qty": 832.0000,
          "sc_qty1": 16.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62434002",
          "od_no": "A62434",
          "el_no": "4TCRE6030000XX4500WZ",
          "sc_qty": 850.5000,
          "sc_qty1": 0.7875,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62451001",
          "od_no": "A62451",
          "el_no": "5FPDNXX024ZZ0010400",
          "sc_qty": 3714.0480,
          "sc_qty1": 24.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62451002",
          "od_no": "A62451",
          "el_no": "4FPDNXX024ZZ0021200",
          "sc_qty": 3816.0000,
          "sc_qty1": 12.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62451003",
          "od_no": "A62451",
          "el_no": "5EPDNXX024ZZ0021200",
          "sc_qty": 3846.5280,
          "sc_qty1": 12.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62452001",
          "od_no": "A62452",
          "el_no": "5EPEFXX024ZZ0010400",
          "sc_qty": 3714.0480,
          "sc_qty1": 24.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62452002",
          "od_no": "A62452",
          "el_no": "4CPEC000B3250K",
          "sc_qty": 4000.0000,
          "sc_qty1": 8.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62453001",
          "od_no": "A62453",
          "el_no": "5FPDNXX024ZZ0020500",
          "sc_qty": 2440.3200,
          "sc_qty1": 8.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62453002",
          "od_no": "A62453",
          "el_no": "5EPDNXX024ZZ0020500",
          "sc_qty": 2479.6800,
          "sc_qty1": 8.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62453003",
          "od_no": "A62453",
          "el_no": "4CPEC000T00262",
          "sc_qty": 500.0000,
          "sc_qty1": 1.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62456002",
          "od_no": "A62456",
          "el_no": "4TCRE6055000FB4470WZ",
          "sc_qty": 5067.5625,
          "sc_qty1": 2.5766,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62460001",
          "od_no": "A62460",
          "el_no": "5EPEFXX018DW0003164",
          "sc_qty": 2073.2760,
          "sc_qty1": 81.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62460002",
          "od_no": "A62460",
          "el_no": "4EPEFXX018ZZ0019364",
          "sc_qty": 2140.5384,
          "sc_qty1": 13.5000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62486002",
          "od_no": "A62486",
          "el_no": "4NCR05030000XA4430WZ",
          "sc_qty": 8520.1200,
          "sc_qty1": 8.0137,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62515002",
          "od_no": "A62515",
          "el_no": "4TBRH6035016XX4450WZ",
          "sc_qty": 9536.4192,
          "sc_qty1": 7.6536,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62599002",
          "od_no": "A62599",
          "el_no": "4NCR00045000XX4500WZ",
          "sc_qty": 3265.9200,
          "sc_qty1": 2.0160,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "A62729002",
          "od_no": "A62729",
          "el_no": "4NCR05055000XX4700WZ",
          "sc_qty": 5069.2950,
          "sc_qty1": 2.4513,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "FC23900002",
          "od_no": "FC2390",
          "el_no": "4CPEC000B22352",
          "sc_qty": 10000.0000,
          "sc_qty1": 20.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "FC23900004",
          "od_no": "FC2390",
          "el_no": "4CPEC000B32221",
          "sc_qty": 35000.0000,
          "sc_qty1": 70.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "FC23900005",
          "od_no": "FC2390",
          "el_no": "4CPEC000B32294",
          "sc_qty": 10000.0000,
          "sc_qty1": 20.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "FC23900014",
          "od_no": "FC2390",
          "el_no": "4CPEC000B22314",
          "sc_qty": 175000.0000,
          "sc_qty1": 350.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "R230800010",
          "od_no": "R23080",
          "el_no": "4NCR05050000XX4730WZ",
          "sc_qty": 2500.0000,
          "sc_qty1": 2500.0000,
          "status": 0,
          "subOrder": null
      },
      {
          "sc_odno": "R230900003",
          "od_no": "R23090",
          "el_no": "6NCR",
          "sc_qty": 1200.0000,
          "sc_qty1": 1200.0000,
          "status": 0,
          "subOrder": null
      }
  ])
  }

  Insert(body: any): Observable<any> {
    let url = `${environment.otherURL}MesSystem/Insert`;
    let r = this.http.post<any>( url, body);
    return r;
  }


  HelloWorld(): Observable<any> {
    let url = `${environment.apiURL}WetWipes/HelloWorld`;
    let r = this.http.post<any>( url, { "condition":"good!" });
    return r;
  }

  Query(form_no: any, table: any): Observable<any> {
    let url = `${environment.apiURL}WetWipes/QueryByKey?form_no=${form_no}&table=${table}`;
    let r = this.http.get<any>( url);
    return r;
  }
  
}
