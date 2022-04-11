import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import LoadingTiles from '../../components/LoadingTiles';
import { fetchFaqs, getFaqState } from '../../ducks/faqs';
import { getPageBySlug } from '../../ducks/pages';
import './Faq.css';

const Faq = () => {
  const dispatch = useDispatch();
  const faqs = useSelector((state) => getFaqState(state)?.data);
  const isLoading = useSelector((state) => getFaqState(state)?.isLoading);
  const faqsPage = useSelector((state) => getPageBySlug(state, 'faqs'));

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  return (
    <div className="faq page--no-top-image">
      <Helmet>
        <title>Laura and Ian Wedding | FAQs</title>
      </Helmet>
      <div className="background-image-container">
        {faqsPage?.header_image?.guid && (
          <img
            src={faqsPage.header_image.guid}
            className="background-image"
            alt="Laura and Ian at the Highline"
          />
        )}
      </div>
      <div className="page-contents">
        <h1 className="page-title">FAQs</h1>
        {isLoading && (
          <div>
            <LoadingTiles
              tiles={4}
              tileStyles={{ width: '80%', height: '50px' }}
              message="Fetching FAQs..."
            />
          </div>
        )}
        <div className="faq__list">
          {faqs?.map((faq) => (
            <div key={faq.question} className="faq__item">
              <div className="faq__question">
                <div className="question__inner">
                  <h3>{faq.question}</h3>
                </div>
              </div>
              <div className="faq__answer">
                <div className="answer__inner">
                  <p className="answer__text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {faqsPage?.footer_image?.guid && (
          <img
            src={faqsPage.footer_image.guid}
            className="background-image"
            alt="Laura and Ian walking away in West Village"
          />
        )}
      </div>
    </div>
  );
};

export default Faq;
