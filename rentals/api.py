import frappe

@frappe.whitelist(allow_guest=True)

def get_emoji():
    return "💖"

# this api can be accesable through - http://irfan.cabs.localhost:8002/api/v2/method/rentals.api.get_emoji - in postman