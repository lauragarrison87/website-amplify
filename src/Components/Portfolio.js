import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
               <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
            <p>
                {/*<strong>{projects.title}</strong><br/>*/}
                <em>{projects.brief}</em>
            </p>
            {/*<p>Published in <em>{projects.pub}</em><br/>{projects.note}</p>*/}
        </div>
      })
    }

    return (
      <section id="portfolio">
      <div className="row">

          <h1>Featured Work</h1>
          <h4>I love to collaborate! If you're interested in my work or want to have a chat, please reach out.<br/>For more information about any of the below projects, click the image to follow a link to project page.</h4>

          <div className="twelve columns collapsed">
              <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
                  {projects}
              </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
