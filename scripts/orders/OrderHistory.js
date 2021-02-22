const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector(".userOrders")

 export const renderCustomerOrderHistory = () => {

}

eventHub.addEventListener("showCustomerOrderHistory", event => {
    const customerOrderHistory = event.detail.customerOrderHistory
    const customerOrder = customerOrderHistory.map(order => {
        return `
        <div class="customerOrders">
                        <div class="singleCustomerOrder">
                            Order Id: ${order.id} <br>
                            Status Id: ${order.statusId} <br>
                            Timestamp: ${order.timestamp} <br>
                            Order Total: ${order.orderTotal} <br>
                            <button id="deleteOrder--${order.id}">Delete</button>
                        </div> <br>
                    </div>
        `
    }).join("")
    contentTarget.innerHTML = `${customerOrder}`
})

eventHub.addEventListener