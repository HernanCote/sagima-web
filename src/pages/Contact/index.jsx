import React from 'react';
import emailjs from 'emailjs-com';
import styled, { css } from 'styled-components';
import { toast } from 'react-toastify';

import ImageHero from '../../static/images/BaseHero.jpg';

import HeroImage from '../../components/HeroImage';
import Footer from '../../components/Footer';

import { P, buttonStyles } from '../../components/Foundation';

import SagimaLogo from '../../static/images/sagima/sagima-yellow-white.png';

import { getMediaMinWidth } from '../../utils';
import theme from '../../theme';

const ContactRoot = styled.div`
	background-color: ${theme.colors.white};
`;

const Section = styled.section`
	display: block;
	align-items: center;
	width: 80%;
	margin: ${theme.spacing.commonSpacing} auto;
	padding: ${theme.spacing.commonSpacing} 0;
	margin-bottom: 0;

	p {
		text-align: center;
		line-height: 1.5rem;
	}

	${getMediaMinWidth('sm')} {
		width: 60%;
	}
`;

const images = [
  ImageHero,
];

const FormRoot = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100%;
	
	${getMediaMinWidth('sm')} {
		flex-direction: row;
		height: 30rem;
	}
`;

const FormInformation = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	padding: 6rem 0;
	background-color: ${theme.colors.sagimaDarkGray};
	
	> ${P} {
		padding: 0 4rem;
	}
	
	${P} {
		color: ${theme.colors.sagimaLightGrey};
	}
`;

const ContactInformation = styled.div`
	position: absolute;
	bottom: 1.5rem;
	right: 1.5rem;

	${P} {
		font-size: 0.75rem;
		text-align: end;
		margin: 0rem;
	}
`;

const FormLogo = styled.img`
	width: 10rem;
`;

const Form = styled.form`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 0;
	position: relative;

	${getMediaMinWidth('sm')} {
		margin-left: 1rem;
	}
`;

const commonStyles = css`
	padding: 0.5rem 1rem;
	border: 3px ${theme.colors.borderGray} solid;
	background-color: ${theme.colors.sagimaLighterGrey};
`;

const TextArea = styled.textarea`
	${commonStyles}
	flex-grow: 1;
	margin-top: 0.25rem;
	border-bottom: 4rem ${theme.colors.borderGray} solid;
`;

const Input = styled.input`
	${commonStyles}
	margin: 0.25rem 0;

	${getMediaMinWidth('sm')} {
		&:nth-child(1) {
			margin-top: 0;
		}
	}
`;

const Submit = styled.input`
	position: absolute;
	${buttonStyles};
	width: 10rem;
	bottom: 1rem;
	left: calc(25%);
`;

const Contact = ({
  className,
}) => {
  const sendEmail = async e => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID,
      );

      if (result.status === 200) {
        toast.warn('Hemos enviado tu mensaje! Estaremos en contacto contigo muy pronto.');
      } else {
        toast.error('Intenta de nuevo en unos minutos');
      }
    } catch (error) {
      toast.error('Ups! Error de nuestro lado, intenta de nuevo en unos minutos');
    }
  };

  return (
    <ContactRoot className={className}>
      <HeroImage images={images} bottomText="CONTACTO" />
      <Section>
        <FormRoot>
          <FormInformation>
            <FormLogo src={SagimaLogo} />
            <P>
              En SAGIMA estamos para
              servirte, por eso responderemos
              a tu solicitud con la mayor
              brevedad.
            </P>
            <P>
              Gracias por contactarnos
            </P>
            <ContactInformation>
              <P>contacto@sagima.com.co</P>
              <P>Bogotá, Colombia</P>
            </ContactInformation>
          </FormInformation>
          <Form className="contact-form" onSubmit={sendEmail}>
            <Input type="text" name="name" placeholder="Nombre Completo" />
            <Input type="text" name="company" placeholder="Empresa" />
            <Input type="text" name="city" placeholder="Ciudad | País" />
            <Input type="text" name="phone" placeholder="Teléfono | Celular" />
            <Input type="email" name="email" placeholder="Correo electrónico" />
            <TextArea name="message" placeholder="Escribe tu mensaje aquí..." />
            <Submit
              withShadow
              blackText
              type="submit"
              value="Enviar"
            />
          </Form>
        </FormRoot>
      </Section>
      <Footer />
    </ContactRoot>
  );
};

export default Contact;
