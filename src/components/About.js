function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              Design, build, scale and deliver the world-class software solutions.
              Working with Lavita ("https://www.lavita.ai/"), a blockchain-AI based next generation healthcare technology company based in Singapore aiming to revolutionize the way 8 billion individuals around the world diagnose, analyze, and treat health and genomic issues, leading to earlier intervention and improved outcome 2022.
              Working with Novo Vivo Inc ("http://www.novovivo.io/") and NVXClouds tech ("https://nvxclouds.com"), building a platform to enable the use of massive biomedical datasets for research while preserving individual privacy and ownership of data 2022.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
