import { Component, ElementRef, OnInit, ViewChild  } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {

  @ViewChild('paymentRef', {static: true}) paymentRef!: ElementRef;

	ngOnInit(): void {
    // window.paypal.Buttons({
    //   createOrder: (data: any, actions: any)=>{
    //     return actions.order.create({
    //       purchase_units: [
    //         {
    //           desription: "test",
    //           amount: {
    //             currency_code: "EUR",
    //             value: "80.00",
    //             breakdown: {
    //               item_total: {
    //                 currency_code: "EUR",
    //                 value: "80.00",
    //               },
    //             },
    //           },
    //           items: [
    //             {
    //               name: "Enterprise Subscription",
    //               quantity: "1",
    //               category: "DIGITAL_GOODS",
    //               unit_amount: {
    //                 currency_code: "EUR",
    //                 value: "80.00",
    //               },
    //             },
    //           ],
    //         },
    //       ],
    //     })
    //   },
    //   onApprove: (data: any, actions: { order: { get: () => Promise<any>; }; }) => {
    //       console.log(
    //         "onApprove - transaction was approved, but not authorized",
    //         data,
    //         actions
    //       );
    //       actions.order.get().then((details: any) => {
    //         console.log(
    //           "onApprove - you can get full order details inside onApprove: ",
    //           details
    //         );
    //       });
    //     },
    //     onClientAuthorization: (data: any) => {
    //       console.log(
    //         "onClientAuthorization - you should probably inform your server about completed transaction at this point",
    //         data
    //       );
    //       // this.showSuccess = true; 
    //     },
    //     onCancel: (data: any, actions: any) => {
    //       console.log("OnCancel", data, actions);
    //       // this.showCancel = true;
    //     },
    //     onError: (err: any) => {
    //       console.log("OnError", err);
    //       // this.showError = true;
    //     },
    //     onClick: (data: any, actions: any) => {
    //       console.log("onClick", data, actions);
    //       // this.resetStatus();
    //     },
    // }).render(this.paymentRef.nativeElement);
    
	}


  ngAfterViewInit(): void {
    window.paypal.Buttons({
      createOrder: (data: any, actions: any)=>{
        return actions.order.create({
          purchase_units: [
            {
              desription: "test",
              amount: {
                currency_code: "EUR",
                value: "80.00",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "80.00",
                  },
                },
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: "80.00",
                  },
                },
              ],
            },
          ],
        })
      },
      onApprove: (data: any, actions: { order: { get: () => Promise<any>; }; }) => {
          console.log(
            "onApprove - transaction was approved, but not authorized",
            data,
            actions
          );
          actions.order.get().then((details: any) => {
            console.log(
              "onApprove - you can get full order details inside onApprove: ",
              details
            );
          });
        },
        onClientAuthorization: (data: any) => {
          console.log(
            "onClientAuthorization - you should probably inform your server about completed transaction at this point",
            data
          );
          // this.showSuccess = true; 
        },
        onError: (err: any) => {
          console.log("OnError", err);
          // this.showError = true;
        },
    }).render(this.paymentRef.nativeElement);
    
  }
}
