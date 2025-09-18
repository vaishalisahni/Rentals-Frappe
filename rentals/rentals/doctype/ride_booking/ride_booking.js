// Copyright (c) 2025, Vaishali Sahni and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
    refresh(frm) {

    },
    rate(frm) {
        // recalculate table
        frm.trigger("update_total_amount");
    },
    update_total_amount(frm) {
        let total_d=0;
        for (let item of frm.doc.items) {
            total_d+=item.distance;
        }
        const amt = total_d * frm.doc.rate;
        frm.set_value("total_amount", amt);
    }
});
// child table script
frappe.ui.form.on('Ride Booking Item', {
    refresh(frm) {
        // your code here

    },
    distance(frm, cdt, cdn) {
        // example
        // console.log(cdt , cdn);
        // console.log("child table distance changed");
        // my_child = frappe.get_doc(cdt, cdn);
        // console.log(my_child);
        // frappe.model.set_value(cdt, cdn, 'source', "updated source");

        frm.trigger("update_total_amount");
    },
    items_remove(frm, cdt, cdn) {
        frm.trigger("update_total_amount");
    },
    items_add(frm, cdt, cdn){
        frm.trigger("update_total_amount");
    }

})
