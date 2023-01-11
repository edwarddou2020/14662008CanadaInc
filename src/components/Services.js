import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development Solutions" img="card1.png" text="Web services development and maintenance. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Web3 Solutions" img="card2.png" text="Blockchain, Non-fungible token, KMS." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Privacy Computing Solutions" img="card3.png" text="Trust Execution Environment, Federated Learning, secure multi-party computing." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
