// 1. 주문 번호 생성하기
function placeOrder(menu, goCook) {
  setTimeout(() => {
    const orderId = Math.floor(Math.random() * 1000) + 1;
    console.log(`주문이 생성되었습니다. ${menu} 요리 주문 ID: ${orderId}`);
    goCook({orderId, menu})
  }, Math.random() * 2000);
}

// 2. 실제로 주문하기
function cook(order, goDelivery) {
  setTimeout(() => {
    const isCookingSuccessful = Math.random() < 0.8;
    if (isCookingSuccessful) {
      // 요리를 성공했다는 의미로
      // 그 다음에 부여되는 함수 >> 콜백 함수
      goDelivery()
    } else {
      // 실패했다면, 콜백함수 부를 필요 없죠?
      console.log(`주문 실패: ${order.menu} 요리 실패, 다시 주문해주세요.`);
    }
  },  Math.random() * 2000);
}

function deliver(order, orderComplete) {
  setTimeout(() => {
    const isDeliverySuccessful = Math.random() < 0.9;
    if (isDeliverySuccessful) {
      orderComplete(`주문 성공: ${order.menu} 배달 완료!`);
    } else {
      orderComplete(`주문 실패: ${order.menu} 배달 실패, 다시 주문해주세요.`);
    }
  },  Math.random() * 2000);
}

// 배달 시작
function processOrder(orderDetails) {
	// 1. 주문 번호 생성
  placeOrder(orderDetails.menu)
  // 시작하자마자 따라따라따따 내려감.
  cook(orderDetails)
  deliver(orderDetails)
}

const orderDetailsList = [
  { menu: "치킨" },
  { menu: "피자" },
  { menu: "샐러드" },
];

orderDetailsList.forEach((element) => {
  processOrder(element);
});
