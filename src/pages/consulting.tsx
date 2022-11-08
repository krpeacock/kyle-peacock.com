import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../layouts/layout";
import { formStyle } from "./formStyle";

const Form = styled.form`
  ${formStyle}
`;

interface Props {
  pageContext: any;
  location: Location;
}

const StyleWrapper = styled.div`
  text-transform: none;
`;

function Consulting(props: Props) {
  const { location, pageContext } = props;

  return (
    <Layout pageContext={pageContext} location={location}>
      <StyleWrapper>
        <SEO title="Government Blockchain Consultation" />
        <h1>Consulting - Municipal Blockchain</h1>
        <p></p>
        <h2>Public vs Private Data</h2>
        <h2>Choosing the Right Tools</h2>
        <h2>Responsibility</h2>
        <section>
          <iframe
            frameBorder="0"
            style={{ height: "500px", width: "99%", border: "none" }}
            src="https://forms.zohopublic.com/virtualoffice8607/form/MunicipalBlockchain/formperma/E9qEgsIhXaxWRLq2Nbgd5OCensSlYn9E-UeA3Zb9EFo"
          ></iframe>
          <Form
            action="https://forms.zohopublic.com/virtualoffice8607/form/MunicipalBlockchain/formperma/-e0CYoXEGnSGTUZadr5PvbR2cU9NOP8pRWFhjM78xUQ/htmlRecords/submit"
            name="form"
            method="POST"
            onSubmit={() => (window as any).zf_ValidateAndSubmit()}
            accept-charset="UTF-8"
            encType="multipart/form-data"
            id="form"
          >
            <input type="hidden" name="zf_referrer_name" value="website" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <div className="zf-templateWrapper">
              <ul className="zf-tempHeadBdr">
                <li className="zf-tempHeadContBdr">
                  <h2 className="zf-frmTitle">
                    <em>Consultation Intake</em>
                  </h2>
                  <p className="zf-frmDesc">
                    Get in touch with Kyle for consultation services for your
                    municipal / public interest blockchain project!
                  </p>
                  <div className="zf-clearBoth"></div>
                </li>
              </ul>
              <div className="zf-subContWrap zf-topAlign">
                <ul>
                  <li className="zf-tempFrmWrapper zf-name zf-namemedium">
                    <label className="zf-labelName">
                      Name
                      <em className="zf-important">*</em>
                    </label>
                    <div className="zf-tempContDiv zf-twoType">
                      <div className="zf-nameWrapper">
                        <span>
                          {" "}
                          <input
                            type="text"
                            maxLength={255}
                            name="Name_First"
                            fieldtype={7}
                            placeholder=""
                          />{" "}
                          <label>First Name</label>
                        </span>
                        <span>
                          {" "}
                          <input
                            type="text"
                            maxLength={255}
                            name="Name_Last"
                            fieldtype={7}
                            placeholder=""
                          />{" "}
                          <label>Last Name</label>
                        </span>
                        <div className="zf-clearBoth"></div>
                      </div>
                      <p
                        id="Name_error"
                        className="zf-errorMessage"
                        style={{ display: "none" }}
                      >
                        Invalid value
                      </p>
                    </div>
                    <div className="zf-clearBoth"></div>
                  </li>

                  <li className="zf-tempFrmWrapper zf-small">
                    <label className="zf-labelName">
                      Email
                      <em className="zf-important">*</em>
                    </label>
                    <div className="zf-tempContDiv">
                      <span>
                        {" "}
                        <input
                          fieldType={9}
                          type="text"
                          maxLength={255}
                          name="Email"
                          checktype="c5"
                          value=""
                          placeholder=""
                        />
                      </span>{" "}
                      <p
                        id="Email_error"
                        className="zf-errorMessage"
                        style={{ display: "none" }}
                      >
                        Invalid value
                      </p>
                    </div>
                    <div className="zf-clearBoth"></div>
                  </li>
                  <li className="zf-tempFrmWrapper zf-small">
                    <label className="zf-labelName">Organization</label>
                    <div className="zf-tempContDiv">
                      <span>
                        {" "}
                        <input
                          type="text"
                          name="SingleLine"
                          checktype="c1"
                          value=""
                          maxLength={255}
                          fieldType={1}
                          placeholder=""
                        />
                      </span>{" "}
                      <p
                        id="SingleLine_error"
                        className="zf-errorMessage"
                        style={{ display: "none" }}
                      >
                        Invalid value
                      </p>
                    </div>
                    <div className="zf-clearBoth"></div>
                  </li>
                  <li className="zf-tempFrmWrapper zf-small">
                    <label className="zf-labelName">Level of Interest</label>
                    <div className="zf-tempContDiv zf-mSelect">
                      <select
                        name="MultipleChoice"
                        checktype="c1"
                        multiple={true}
                      >
                        <option value="Curious">Curious</option>
                        <option value="Exploring&#x20;Options">
                          Exploring&#x20;Options
                        </option>
                        <option value="Ready&#x20;to&#x20;Build&#x20;&#x2f;&#x20;Actively&#x20;Building">
                          Ready&#x20;to&#x20;Build&#x20;&#x2f;&#x20;Actively&#x20;Building
                        </option>
                      </select>
                      <p
                        id="MultipleChoice_error"
                        className="zf-errorMessage"
                        style={{ display: "none" }}
                      >
                        Invalid value
                      </p>
                    </div>
                    <div className="zf-clearBoth"></div>
                  </li>
                  <li className="zf-tempFrmWrapper zf-small">
                    <label className="zf-labelName">Notes</label>
                    <div className="zf-tempContDiv">
                      <span>
                        {" "}
                        <textarea
                          name="MultiLine"
                          checktype="c1"
                          maxLength={65535}
                          placeholder=""
                        ></textarea>{" "}
                      </span>
                      <p
                        id="MultiLine_error"
                        className="zf-errorMessage"
                        style={{ display: "none" }}
                      >
                        Invalid value
                      </p>
                      <p className="zf-instruction">
                        Tell me about what you are considering for your
                        organization
                      </p>
                    </div>
                    <div className="zf-clearBoth"></div>
                  </li>
                </ul>
              </div>
              <ul>
                <li className="zf-fmFooter">
                  <button className="zf-submitColor">Submit</button>
                </li>
              </ul>
            </div>
          </Form>
        </section>
      </StyleWrapper>
    </Layout>
  );
}

export default Consulting;
