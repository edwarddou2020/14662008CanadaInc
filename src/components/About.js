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
              Design, build, scale and deliver the customized software solutions.{"\n"}
              Working with Lavita @ Singapore, a blockchain-AI based next generation healthcare technology company aiming to revolutionize the way 8 billion individuals around the world diagnose, analyze, and treat health and genomic issues, leading to earlier intervention and improved outcome.{"\n"}
              Working with NovoVivo @ California and NVXClouds @ China, building a platform to enable the use of massive biomedical datasets for research while preserving individual privacy and ownership of data.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
