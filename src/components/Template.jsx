import React from 'react'

const template = () => {
  return (
    <div>
        <div className="container">
  <div className="row">
    <div className="col-lg-3">
      <div className="list-sidebar-style1 d-none d-lg-block">
        <div className="accordion" id="accordionExample">
          <div className="card mb20 pb10 mt-0">
            <div className="card-header" id="heading0">
              <h4>
                <button
                  className="btn btn-link ps-0 pt-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse0"
                  aria-expanded="false"
                  aria-controls="collapse0"
                >
                  Skills
                </button>
              </h4>
            </div>
            <div
              id="collapse0"
              className="collapse show"
              aria-labelledby="heading0"
              data-parent="#accordionExample"
            >
              <div className="checkbox-style1 mb15">
                <label className="custom_checkbox">
                  UX Designer
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="right-tags">(1,945)</span>
                </label>
                <label className="custom_checkbox">
                  Web Developers
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="right-tags">(8,136)</span>
                </label>
                <label className="custom_checkbox">
                  Illustrators
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="right-tags">(917)</span>
                </label>
                <label className="custom_checkbox">
                  Node.js
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="right-tags">(240)</span>
                </label>
                <label className="custom_checkbox">
                  Project Managers
                  <input type="checkbox" />
                  <span className="checkmark" />
                  <span className="right-tags">(2,460)</span>
                </label>
              </div>
            </div>
          </div>
          <div className="card mb20 pb0">
            <div className="card-header" id="heading1">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Price
                </button>
              </h4>
            </div>
            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="heading1"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <div className="range-slider-style1">
                  <div className="card-body card-body px-0 pt-0">
                    <div className="range-slider-style2">
                      <div className="range-wrapper">
                        <div className="price__range__box">
                          <div
                            className="horizontal-slider"
                            style={{ position: "relative" }}
                          >
                            <div
                              className="example-track example-track-0"
                              style={{
                                position: "absolute",
                                left: 0,
                                right: 288
                              }}
                            />
                            <div
                              className="example-track example-track-1"
                              style={{
                                position: "absolute",
                                left: 0,
                                right: 0
                              }}
                            />
                            <div
                              className="example-track example-track-2"
                              style={{
                                position: "absolute",
                                left: 288,
                                right: 0
                              }}
                            />
                            <div
                              className="example-thumb example-thumb-0 "
                              tabIndex={0}
                              role="slider"
                              aria-orientation="horizontal"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100000}
                              aria-disabled="false"
                              style={{
                                position: "absolute",
                                touchAction: "none",
                                zIndex: 1,
                                left: 0
                              }}
                            />
                            <div
                              className="example-thumb example-thumb-1 "
                              tabIndex={0}
                              role="slider"
                              aria-orientation="horizontal"
                              aria-valuenow={100000}
                              aria-valuemin={0}
                              aria-valuemax={100000}
                              aria-disabled="false"
                              style={{
                                position: "absolute",
                                touchAction: "none",
                                zIndex: 2,
                                left: 288
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex gap-1 align-items-center pt-4">
                          <input
                            type="number"
                            className="amount w-100"
                            placeholder="$20"
                            min={0}
                            defaultValue={0}
                          />
                          <span className="fa-sharp fa-solid fa-minus mx-1 dark-color" />
                          <input
                            type="number"
                            className="amount2 w-100"
                            placeholder="$100000"
                            min={0}
                            max={100000}
                            defaultValue={100000}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="card-header" id="heading2">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >
                  Location
                </button>
              </h4>
            </div>
            <div
              id="collapse2"
              className="collapse show"
              aria-labelledby="heading2"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <div className="default-box-shadow1 mb30">
                  <div className="search_area">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      defaultValue=""
                    />
                    <label>
                      <span className="flaticon-loupe" />
                    </label>
                  </div>
                </div>
                <div className="checkbox-style1 mb15">
                  <label className="custom_checkbox">
                    United States
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(1,945)</span>
                  </label>
                  <label className="custom_checkbox">
                    United Kingdom
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(8,136)</span>
                  </label>
                  <label className="custom_checkbox">
                    Canada
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(917)</span>
                  </label>
                  <label className="custom_checkbox">
                    Germany
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(240)</span>
                  </label>
                  <label className="custom_checkbox">
                    Turkey
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(2,460)</span>
                  </label>
                </div>
                <a className="text-thm">+20 more</a>
              </div>
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="card-header" id="heading3">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >
                  Languange
                </button>
              </h4>
            </div>
            <div
              id="collapse3"
              className="collapse show"
              aria-labelledby="heading3"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <div className="checkbox-style1 mb15">
                  <label className="custom_checkbox">
                    Turkish
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(1,945)</span>
                  </label>
                  <label className="custom_checkbox">
                    English
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(8,15)</span>
                  </label>
                  <label className="custom_checkbox">
                    Italian
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(654)</span>
                  </label>
                  <label className="custom_checkbox">
                    Spanish
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(323)</span>
                  </label>
                </div>
                <a className="text-thm">+20 more</a>
              </div>
            </div>
          </div>
          <div className="card mb20 pb5">
            <div className="card-header" id="heading4">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  Level
                </button>
              </h4>
            </div>
            <div
              id="collapse4"
              className="collapse show"
              aria-labelledby="heading4"
              data-parent="#accordionExample"
            >
              <div className="card-body card-body px-0 pt-0">
                <div className="checkbox-style1">
                  <label className="custom_checkbox">
                    Top Rated Seller
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(1,945)</span>
                  </label>
                  <label className="custom_checkbox">
                    Level Two
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(8,136)</span>
                  </label>
                  <label className="custom_checkbox">
                    Level One
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(917)</span>
                  </label>
                  <label className="custom_checkbox">
                    New Seller
                    <input type="checkbox" />
                    <span className="checkmark" />
                    <span className="right-tags">(240)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-9">
      <div className="row align-items-center mb20">
        <div className="col-md-6">
          <div className="text-center text-md-start">
            <p className="text mb-0 mb10-sm">
              <span className="fw500">9</span> services available
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="page_control_shorting d-md-flex align-items-center justify-content-center justify-content-md-end">
            <div className="dropdown-lists d-block d-lg-none me-2 mb10-sm">
              <ul className="p-0 mb-0 text-center text-md-start">
                <li>
                  <button type="button" className="open-btn filter-btn-left">
                    <img
                      className="me-2"
                      src="/images/icon/all-filter-icon.svg"
                      alt="icon"
                    />
                    All Filter
                  </button>
                </li>
              </ul>
            </div>
            <div className="pcs_dropdown dark-color pr10 pr0-xs text-center">
              <span>Sort by</span>
              <div className="dropdown bootstrap-select show-tick">
                <button
                  type="button"
                  className="btn dropdown-toggle btn-light"
                  data-bs-toggle="dropdown"
                >
                  <div className="filter-option">
                    <div className="filter-option-inner">
                      <div className="filter-option-inner-inner">
                        Best Seller
                      </div>
                    </div>
                  </div>
                </button>
                <div className="dropdown-menu">
                  <div className="inner show">
                    <ul className="dropdown-menu inner show">
                      <li>
                        <a className="dropdown-item active selected">
                          <span className="bs-ok-default check-mark" />
                          <span className="text">Best Seller</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item ">
                          <span className="bs-ok-default check-mark" />
                          <span className="text">Recommended</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item ">
                          <span className="bs-ok-default check-mark" />
                          <span className="text">New Arrivals</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-1.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">Robert Fox</h5>
              <p className="mb-0">Nursing Assistant</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.9</span>(595 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/1">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-2.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">Jane Doe</h5>
              <p className="mb-0">Graphic Designer</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.8</span>(423 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/2">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-3.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">Michael Johnson</h5>
              <p className="mb-0">Web Developer</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.7</span>(312 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/3">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-4.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">Emily Williams</h5>
              <p className="mb-0">Content Writer</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.6</span>(278 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/4">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-1.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">David Smith</h5>
              <p className="mb-0">Photographer</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.9</span>(511 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/5">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-2.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">Sophia Brown</h5>
              <p className="mb-0">UI/UX Designer</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.8</span>(385 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/6">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-3.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">Daniel Wilson</h5>
              <p className="mb-0">Video Editor</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.7</span>(248 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/7">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-4.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">Olivia Taylor</h5>
              <p className="mb-0">Social Media Manager</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.9</span>(632 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/8">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow">
            <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
              <img
                className="rounded-circle mx-auto"
                src="/images/team/fl-1.png"
                alt="thumb"
              />
              <span className="online" />
            </div>
            <div className="details">
              <h5 className="title mb-1">William Clark</h5>
              <p className="mb-0">Mobile App Developer</p>
              <div className="review">
                <p>
                  <i className="fas fa-star fz10 review-color pr10" />
                  <span className="dark-color fw500">4.6</span>(314 reviews)
                </p>
              </div>
              <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                <span className="tag">Figma</span>
                <span className="tag mx10">Sketch</span>
                <span className="tag">HTML5</span>
              </div>
              <hr className="opacity-100 mt20 mb15" />
              <div className="fl-meta d-flex align-items-center justify-content-between">
                <a className="meta fw500 text-start">
                  Location
                  <br />
                  <span className="fz14 fw400">London</span>
                </a>
                <a className="meta fw500 text-start">
                  Rate
                  <br />
                  <span className="fz14 fw400">$90 / hr</span>
                </a>
                <a className="meta fw500 text-start">
                  Job Success
                  <br />
                  <span className="fz14 fw400">%98</span>
                </a>
              </div>
              <div className="d-grid mt15">
                <a className="ud-btn btn-light-thm" href="/freelancer-single/9">
                  View Profile
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt30">
        <div className="mbp_pagination text-center  ">
          <ul className="page_navigation">
            <li className="page-item">
              <a className="page-link">
                <span className="fas fa-angle-left" />
              </a>
            </li>
            <li className="page-item">
              <a className="page-link">1</a>
            </li>
            <li className="page-item active" aria-current="page">
              <a className="page-link">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">4</a>
            </li>
            <li className="page-item">
              <a className="page-link">5</a>
            </li>
            <li className="page-item">
              <a className="page-link">...</a>
            </li>
            <li className="page-item">
              <a className="page-link">20</a>
            </li>
            <li className="page-item">
              <a className="page-link">
                <span className="fas fa-angle-right" />
              </a>
            </li>
          </ul>
          <p className="mt10 mb-0 pagination_page_count text-center">
            1 – 20 of 300+ property available
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default template