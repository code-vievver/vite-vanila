// TODO 주석은 정말로 공유할때만 쓰는것이고, 불필요한 설명은 필요없음.
// TODO 함수명을 더 잘쓰는게 중요함.
// TODO renderer는 util이 아님.

export const rendererCreateCartItem = ({
  amount,
  id,
  price,
  thumbnail,
  title,
}) => {
  const singleCartItem = document.createElement("li");
  singleCartItem.classList.add("swiper-slide");
  singleCartItem.setAttribute("data-id", id);
  singleCartItem.innerHTML = /*html*/ `
    <div class="box__item-top">
      <div class="box__cart-image">
        <div class="box__image">
          <img src="${thumbnail}" alt="${title} 이미지" />
        </div>
      </div>
      <button type="button" class="button__remove-item" data-id="${id}">
        <i class="fas fa-trash-alt"></i>
        <span class="offscreen">상품 삭제</span>
      </button>
    </div>
    <div class="box__cartItem-content">
      <div class="box__cartItem-info">
        <strong class="text__cartItem-title">${title}</strong>
        <span class="text__cartItem-price">$${price}</span>
      </div>
      <div class="box__control">
        <button class="button__increase-cartItem" data-id="${id}">
          <span class="offscreen">상품 수량증가</span>
          <i class="fas fa-chevron-up"></i>
        </button>
        <span class="text__cartItem-count" data-id="${id}">
          <span class="offscreen">현재 상품수량</span>${amount}<span class="offscreen">개</span>
        </span>
        <button class="button__decrease-cartItem" data-id="${id}">
          <span class="offscreen">상품 수량감소</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  `;
  return singleCartItem;
};

// TODO 사용하지 않는 코드는 삭제한다. 어차피 쓰레기가 될거고, 커밋에 남기 때문에 정말로 필요하면 원복하면 됨.

export const rendererProductItem = ({
  brand,
  description,
  discountPercentage,
  id,
  price,
  rating,
  stock,
  thumbnail,
  title,
}) => {
  return /*html*/ `
    <li class="list-item__card-products">
      <a href="product.html?id=${id}" class="">
        <div class="box__item-image">
          <div class="box__image">
            <img src="${thumbnail}" alt="${title}" />
          </div>
        </div>
      </a>
      <div class="box__item-contents">
        <div class="box__item-info">
          <strong class="text__item-brand">${brand}</strong>
          <p class="text__item-description">${description}</p>
          <div class="box__item-price">
            <span class="text__price-discount">
              ${discountPercentage}%
            </span>
            <span class="text__cart-price">$${price}</span>
          </div>
          <div class="box__item-comment">
            <span class="text__item-rating">
              <i class="fas fa-star"></i>
              ${rating}
            </span>
            <span class="text__item-stock">재고 ${stock}</span>
          </div>
          <strong class="text__item-name">${title}</strong>
          <div class="box__badge">
            <ul class="list__badge">
              <li>
                <span class="text__badge text__special-discount">특가</span>
              </li>
              <li>
                <span class="text__badge text__free-delivery">무료배송</span>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" class="button__add-cart" data-id="${id}">
          <i class="fas fa-shopping-cart"></i>
          <span class="offscreen">장바구니 넣기</span>
        </button>
      </div>
    </li>
  `;
};

export const rendererDetailItem = ({
  amount,
  brand,
  description,
  discountPercentage,
  id,
  price,
  rating,
  stock,
  title,
}) => {
  return /*html*/ `
    <strong class="text__item-origin">${brand}</strong>
    <p class="text__item-introduction">${description}</p>
    <strong class="text__item-title">${title}</strong>
    <div class="box__item-opinion">
      <span class="text__item-rating">
        <i class="fas fa-star"></i>
        ${rating}
      </span>
      <div class="box__item-value">
        <span class="text__item-discount">
          ${discountPercentage}<span class="text__valaue-unit">%</span>
        </span>
        <strong class="text__cart-price">$${price}</strong>
      </div>
      <div class="box__item-info">
        <span class="text__item-quantity">재고 수량 ${stock}</span>
        <span class="text__badge-discount">특가</span>
      </div>
    </div>
    <div class="box__item-store">
      <span class="text__item-home">
        <i class="fas fa-store"></i>${brand}
      </span>
      <button type="button" class="button__brand-store">
        <span>${brand}</span><i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <button type="button" class="button__add-item" data-id="${id}">
      <i class="fas fa-cart-plus"></i>
      <span class="text__add-cart" data-id="${id}">장바구니</span>
    </button>
  `;
};

export const rendererInfoDescription = ({
  description,
  images,
  title,
}) => {
  return /*html*/ `
    <section class="box__main-detail">
      <h3 class="text__section-title">${title}</h3>
      <p class="text__section-description">${description}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[0]}" alt="${title} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[1]}" alt="${title} 두번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>

        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[2]}" alt="${title} 세번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="section__item-description">
      <strong class="text__section-title">Lorem ipsum</strong>
      <p class="text__section-description">Velit incidunt nobis iste fuga eligendi veritatis ducimus dicta modi</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[3]}" alt="${title} 네번째 이미지"/>
        </div>
      </div>
    </div>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/dummyImage01.png" alt="lego batman"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/dummyImage02.png" alt="lego batman"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/dummyImage03.png" alt="lego batman"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;
};

// TODO 약어가 이미 문제가 되고있음. createInfoDescription, createInfoTDescription 는 1글자 차이인데 의미가 완전다름.
export const rendererInfoTDescription = ({
  description,
  images,
  title,
}) => {
  return /*html*/ `
    <section class="box__main-detail">
      <h3 class="text__section-title">${title}</h3>
      <p class="text__section-description">${description}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[0]}" alt="${title} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[1]}" alt="${title} 두번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>

        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[2]}" alt="${title} 세번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/alert.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;
};

export const rendererInfoSingleDescription = ({
  description,
  images,
  title,
}) => {
  return /*html*/ `
    <section class="box__main-detail">
      <h3 class="text__section-title">${title}</h3>
      <p class="text__section-description">${description}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[0]}" alt="${title} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/alert.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;
};

// TODO 이름이 모호함. table은 공용이름임.
export const rendererTable = ({
  brand,
  category,
  description,
  discountPercentage,
  price,
  rating,
  stock,
  title,
}) => {
  return /*html*/ `
    <strong class="offscreen">제품 상세 스펙을 정리하는 테이블</strong>
    <table>
      <colgroup>
        <col style="width:20%">
        <col style="width:30%">
        <col style="width:20%">
        <col class="width:30%">
      </colgroup>
      <tbody>
        <tr class="table-row">
          <th scope="row" class="table-head">제조회사</th>
          <td>${brand}</td>
          <th scope="row" class="table-head">카테고리</th>
          <td>${category}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">제품명</th>
          <td colspan="3">${title}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">제품설명</th>
          <td colspan="3">${description}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">가격</th>
          <td>${price}</td>
          <th scope="row" class="table-head">할인율</th>
          <td>${discountPercentage}%</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">재고수</th>
          <td>${stock}</td>
          <th scope="row" class="table-head">평점</th>
          <td>${rating}</td>
        </tr>
      </tbody>
    </table>
  `;
};
