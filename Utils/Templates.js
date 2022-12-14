const { response } = require("express");

const Pdf_contract_template = (partner_data) => {
  const {
    email,
    nome_entreprise,
    identificateur_entreprise,
    representant_entreprise,
    role_dans_entriprise,
    numero_telephone_fix,
    ville,
    activity_entrprise,
    offer,
  } = partner_data;
  return {
    content: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <title>Contrat</title>
      <style type="text/css">
        * {
          margin: 0;
          padding: 20px;
          text-indent: 0;
        }
        .s1 {
          color: #7f7f7f;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 8pt;
        }
        h2 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 9pt;
        }
        .a,
        a {
          color: #00c;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: underline;
          font-size: 9pt;
        }
        p {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 9pt;
          margin: 0pt;
        }
        h1 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: bold;
          text-decoration: none;
          font-size: 15pt;
        }
        .s3 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 9pt;
        }
        .s4 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 9pt;
        }
        .s5 {
          color: black;
          font-family: "Times New Roman", serif;
          font-style: normal;
          font-weight: normal;
          text-decoration: none;
          font-size: 9pt;
        }
        table,
        tbody {
          vertical-align: top;
          overflow: visible;
        }
      </style>
    </head>
    <body>
      <p style="text-indent: 0pt; text-align: left" />
      <p
        class="s1"
        style="
          padding-top: 4pt;
          padding-left: 12pt;
          text-indent: 0pt;
          text-align: left;
        "
      >
        Image not found or type unknown
      </p>
      <h2 style="padding-left: 86pt; text-indent: 0pt; text-align: left">
        REDUCTE
      </h2>
      <p style="padding-left: 86pt; text-indent: 0pt; text-align: left">
        <a href="https://www.reducte.com/" class="a" target="_blank"
          >www.reducte.com</a
        ><a
          href="mailto:partenaires@reducte.ma"
          style="
            color: #00c;
            font-family: 'Times New Roman', serif;
            font-style: normal;
            font-weight: normal;
            text-decoration: none;
            font-size: 9pt;
          "
          target="_blank"
        >
        </a
        ><a href="mailto:partenaires@reducte.ma" target="_blank"
          >partenaires@reducte.ma</a
        >
      </p>
      <p style="padding-left: 86pt; text-indent: 0pt; text-align: left">
        zenith buisness center ETG 3 N14 40000 - Marrakech, Maroc
      </p>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <h1 style="padding-left: 45pt; text-indent: 0pt; text-align: center">
        Convention de Partenariat
      </h1>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <table
        style="border-collapse: collapse; margin-left: 6.141pt"
        cellspacing="0"
      >
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Detail de la soci??t??
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              PARTENAIRE
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              REDUCTE
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Nom de la soci??t??
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              KOOP MASTER
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              R??ducte
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              ICE
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              003104105000075
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              003030945000087
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Nom de repr??sentant
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Youssef elabid
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              MDAGHRI ALAOUI Zakaria
            </p>
          </td>
        </tr>
        <tr style="height: 29pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                padding-right: 10pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Fonction du repr??sentant
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <p
              class="s3"
              style="padding-left: 7pt; text-indent: 0pt; text-align: left"
            >
              G??rant
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p style="text-indent: 0pt; text-align: left"><br /></p>
            <p
              class="s3"
              style="padding-left: 7pt; text-indent: 0pt; text-align: left"
            >
              CEO
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              T??l??phone
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              0648484838
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              0663 161 043
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Email
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              <a href="mailto:${partner_data.email}" class="s4">${partner_data.email}</a>
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              <a href="mailto:partenaires@reducte.ma" class="s4"
                >partenaires@reducte.ma</a
              >
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Adresse de la soci??t??
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              ${partner_data.adrress}
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Zenith buisness center etg3 n14
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Ville
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              ${partner_data.ville}
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Marrakech
            </p>
          </td>
        </tr>
        <tr style="height: 19pt">
          <td
            style="
              width: 103pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
              Offre
            </p>
          </td>
          <td
            style="
              width: 256pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
              border-bottom-style: solid;
              border-bottom-width: 1pt;
              border-right-style: solid;
              border-right-width: 1pt;
            "
          >
            <p
              class="s3"
              style="
                padding-top: 3pt;
                padding-left: 7pt;
                text-indent: 0pt;
                text-align: left;
              "
            >
             ${partner_data.offer}
            </p>
          </td>
          <td
            style="
              width: 154pt;
              border-top-style: solid;
              border-top-width: 1pt;
              border-left-style: solid;
              border-left-width: 1pt;
            "
          >
            <p style="text-indent: 0pt; text-align: left"><br /></p>
          </td>
        </tr>
      </table>
      <p style="text-indent: 0pt; text-align: left" />
      <p
        style="
          padding-top: 13pt;
          padding-left: 29pt;
          text-indent: 0pt;
          text-align: left;
        "
      >
        Nous nous engageons ?? fournir au partenaire mentionn?? ci-dessus un
        affichage de son logo et informations de contact sur notre site web et
        notre application mobile gratuitement au niveau de la section r??serv??e aux
        partenaires pour une dur??e ind??termin??e.
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <p style="padding-left: 29pt; text-indent: 0pt; text-align: left">
        Le partenaire mentionn?? ci-dessus s???engage ?? accepter tout client
        provenant de la part de REDUCTE.
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <p style="padding-left: 29pt; text-indent: 0pt; text-align: left">
        Le partenaire mentionn?? ci-dessus s???engage ?? respecter l&#39;offre
        mentionn??e ci-dessus vis-??-vis de tous les clients provenant de la part de
        REDUCTE dont l&#39;abonnement est actif.
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <p style="padding-left: 29pt; text-indent: 0pt; text-align: left">
        Le partenaire mentionn?? ci-dessus s???engage ?? afficher un autocollant
        fourni par REDUCTE mettant en avant son partenariat avec REDUCTE
        (dimensions de l???autocollant 10 cm x 15 cm).
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <p style="padding-left: 29pt; text-indent: 0pt; text-align: left">
        Le partenaire s???engage ?? respecter la confidentialit?? des clients en
        s&#39;abstenant de divulguer les informations de ces derniers obtenu de
        l&#39;interface partenaires REDUCTE.
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <p style="text-indent: 0pt; text-align: left" />
      <p style="padding-left: 29pt; text-indent: 0pt; text-align: left">
        Le partenaire mentionn?? ci-dessus s???engage ?? ne pas appliquer l&#39;offre
        mentionn?? ci-dessus ?? des clients dont l???abonnement est expir??. L???accord
        qui lie les deux parties peut-??tre r??sili?? ?? tout moment ?? condition de
        respecter la p??riode de pr??avis de 15 jours, l&#39;envoi du pr??avis devra
        se faire par e-mail.
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <p style="padding-left: 29pt; text-indent: 0pt; text-align: left">
        Le partenaire mentionn?? ci-dessus s???oblige ?? communiquer toute information
        n??cessaire au bon fonctionnement de REDUCTE et de respecter les conditions
        de travail de REDUCT
      </p>
      <p style="text-indent: 0pt; text-align: left" />
      <p style="text-indent: 0pt; text-align: left" />
      <p style="padding-left: 29pt; text-indent: 0pt; text-align: left">
        Tout point non trait?? sera trait?? par la l??gislation en vigueur NB: Le
        retour de ce courriel vaut acceptation.
      </p>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <h2 style="text-indent: 0pt; text-align: right">
        A MARRAKECH Le 05/10/2022 16:44
      </h2>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <p
        style="
          padding-top: 4pt;
          padding-left: 45pt;
          text-indent: 0pt;
          text-align: center;
        "
      >
        ZAKARIA MDAGHRI ALAOUI
      </p>
      <p style="padding-left: 45pt; text-indent: 0pt; text-align: center">
        Repr??sentant de REDUCTE
      </p>
      <p class="s1" style="text-indent: 0pt; line-height: 9pt; text-align: left">
        Image not found or type unknown
      </p>
      <p style="padding-left: 150pt; text-indent: 0pt; text-align: left" />
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <p style="text-indent: 0pt; text-align: left"><br /></p>
      <p style="padding-left: 45pt; text-indent: 0pt; text-align: center">
        <a href="mailto:partenaires@reducte.ma" class="s5" target="_blank"
          >Tel: 06 63 16 10 43 , Email: </a
        ><a href="http://www.reducte.com/" class="s5" target="_blank"
          >partenaires@reducte.ma web: www.reducte.com</a
        >
      </p>
      <p style="padding-left: 45pt; text-indent: 0pt; text-align: center">
        zenith buisness centre etg 3 n14 Marrakech maroc - ICE: 003030945000087
        RC: 123941 IF: 51832067 CNSS: 4089085
      </p>
    </body>
  </html>
  `,
  };
};

const EmailTemplate = (PartnerData) => {
  return `<!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Simple Transactional Email</title>
      <style>
        /* -------------------------------------
            GLOBAL RESETS
        ------------------------------------- */

        /*All the styling goes here*/

        img {
          border: none;
          -ms-interpolation-mode: bicubic;
          max-width: 100%;
        }

        body {
          background-color: #f6f6f6;
          font-family: sans-serif;
          -webkit-font-smoothing: antialiased;
          font-size: 14px;
          line-height: 1.4;
          margin: 0;
          padding: 0;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        table {
          border-collapse: separate;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          width: 100%; }
          table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
        }

        /* -------------------------------------
            BODY & CONTAINER
        ------------------------------------- */

        .body {
          background-color: #f6f6f6;
          width: 100%;
        }

        /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
        .container {
          display: block;
          margin: 0 auto !important;
          /* makes it centered */
          max-width: 580px;
          padding: 10px;
          width: 580px;
        }

        /* This should also be a block element, so that it will fill 100% of the .container */
        .content {
          box-sizing: border-box;
          display: block;
          margin: 0 auto;
          max-width: 580px;
          padding: 10px;
        }

        /* -------------------------------------
            HEADER, FOOTER, MAIN
        ------------------------------------- */
        .main {
          background: #ffffff;
          border-radius: 3px;
          width: 100%;
        }

        .wrapper {
          box-sizing: border-box;
          padding: 20px;
        }

        .content-block {
          padding-bottom: 10px;
          padding-top: 10px;
        }

        .footer {
          clear: both;
          margin-top: 10px;
          text-align: center;
          width: 100%;
        }
          .footer td,
          .footer p,
          .footer span,
          .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center;
        }

        /* -------------------------------------
            TYPOGRAPHY
        ------------------------------------- */
        h1,
        h2,
        h3,
        h4 {
          color: #000000;
          font-family: sans-serif;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
          margin-bottom: 30px;
        }

        h1 {
          font-size: 35px;
          font-weight: 300;
          text-align: center;
          text-transform: capitalize;
        }

        p,
        ul,
        ol {
          font-family: sans-serif;
          font-size: 14px;
          font-weight: normal;
          margin: 0;
          margin-bottom: 15px;
        }
          p li,
          ul li,
          ol li {
            list-style-position: inside;
            margin-left: 5px;
        }

        a {
          color: #3498db;
          text-decoration: underline;
        }

        /* -------------------------------------
            BUTTONS
        ------------------------------------- */
        .btn {
          box-sizing: border-box;
          width: 100%; }
          .btn > tbody > tr > td {
            padding-bottom: 15px; }
          .btn table {
            width: auto;
        }
          .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center;
        }
          .btn a {
            background-color: #ffffff;
            border: solid 1px #3498db;
            border-radius: 5px;
            box-sizing: border-box;
            color: #3498db;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize;
        }

        .btn-primary table td {
          background-color: #3498db;
        }

        .btn-primary a {
          background-color: #3498db;
          border-color: #3498db;
          color: #ffffff;
        }

        /* -------------------------------------
            OTHER STYLES THAT MIGHT BE USEFUL
        ------------------------------------- */
        .last {
          margin-bottom: 0;
        }

        .first {
          margin-top: 0;
        }

        .align-center {
          text-align: center;
        }

        .align-right {
          text-align: right;
        }

        .align-left {
          text-align: left;
        }

        .clear {
          clear: both;
        }

        .mt0 {
          margin-top: 0;
        }

        .mb0 {
          margin-bottom: 0;
        }

        .preheader {
          color: transparent;
          display: none;
          height: 0;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          mso-hide: all;
          visibility: hidden;
          width: 0;
        }

        .powered-by a {
          text-decoration: none;
        }

        hr {
          border: 0;
          border-bottom: 1px solid #f6f6f6;
          margin: 20px 0;
        }

        /* -------------------------------------
            RESPONSIVE AND MOBILE FRIENDLY STYLES
        ------------------------------------- */
        @media only screen and (max-width: 620px) {
          table.body h1 {
            font-size: 28px !important;
            margin-bottom: 10px !important;
          }
          table.body p,
          table.body ul,
          table.body ol,
          table.body td,
          table.body span,
          table.body a {
            font-size: 16px !important;
          }
          table.body .wrapper,
          table.body .article {
            padding: 10px !important;
          }
          table.body .content {
            padding: 0 !important;
          }
          table.body .container {
            padding: 0 !important;
            width: 100% !important;
          }
          table.body .main {
            border-left-width: 0 !important;
            border-radius: 0 !important;
            border-right-width: 0 !important;
          }
          table.body .btn table {
            width: 100% !important;
          }
          table.body .btn a {
            width: 100% !important;
          }
          table.body .img-responsive {
            height: auto !important;
            max-width: 100% !important;
            width: auto !important;
          }
        }

        /* -------------------------------------
            PRESERVE THESE STYLES IN THE HEAD
        ------------------------------------- */
        @media all {
          .ExternalClass {
            width: 100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
            line-height: 100%;
          }
          .apple-link a {
            color: inherit !important;
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            text-decoration: none !important;
          }
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
            font-size: inherit;
            font-family: inherit;
            font-weight: inherit;
            line-height: inherit;
          }
          .btn-primary table td:hover {
            background-color: #34495e !important;
          }
          .btn-primary a:hover {
            background-color: #34495e !important;
            border-color: #34495e !important;
          }
        }

      </style>
    </head>
    <body>
      <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
          <td>&nbsp;</td>
          <td class="container">
            <div class="content">

              <!-- START CENTERED WHITE CONTAINER -->
              <table role="presentation" class="main">

                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p>Bonjour ${PartnerData.representant_entreprise} </p>
                          <p>F??licitations, vous faites maintenant partie de la famille <reducte>, nous sommes vraiment heureux de vous avoir avec nous.</p>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                            <tbody>
                              <tr>
                                <td align="left">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                      <tr>
                                        <td> <a href="${PartnerData.contract_Url}" target="_blank">t??l??charger le contrat au format pdf</a> </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p>apr??s avoir t??l??charg?? le pdf, vous pouvez signer</p>
                          <p>merci d'avoir choisi reducte</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              <!-- END MAIN CONTENT AREA -->
              </table>
              <!-- END CENTERED WHITE CONTAINER -->

              <!-- START FOOTER -->
              <div class="footer">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                    <td class="content-block">
                      <span class="apple-link">Reducte</span>
                      <br> visite our website <a href="https://www.reducte.com/">visitez notre site web</a>.
                    </td>
                  </tr>
                  <tr>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->

            </div>
          </td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>`;
};

const OTP_EMAIL = (code) => {
  return `
  <!--EMAIL_CONFIRMATION_EN-->
  <!DOCTYPE html>
  <html lang="en" class="miro" style="background-color:#f3f4f8;font-size:0;line-height:0">
    <head xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en" style="font-family:Helvetica,Arial,sans-serif">
      <meta charset="UTF-8" style="font-family:Helvetica,Arial,sans-serif">
      <title style="font-family:Helvetica,Arial,sans-serif">Title</title>
      <link rel="stylesheet" href="../css/app.css" style="font-family:Helvetica,Arial,sans-serif">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="font-family:Helvetica,Arial,sans-serif">
      <meta name="viewport" content="width=device-width" style="font-family:Helvetica,Arial,sans-serif">
    </head>
    <body style="-moz-box-sizing:border-box;-ms-text-size-adjust:100%;-webkit-box-sizing:border-box;-webkit-text-size-adjust:100%;Margin:0;background:#f5f5f5;background-color:#f3f4f8;box-sizing:border-box;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.43;margin:0;min-width:600px;padding:0;text-align:left;width:100%!important">
      <table class="miro__container" align="center" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;max-width:600px;min-width:600px;padding:0;text-align:left;vertical-align:top">
        <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
          <td class="miro__content-wrapper" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:43px;text-align:left;vertical-align:top;word-wrap:break-word">
            <div class="miro__content" style="background-color:#fff;font-family:Helvetica,Arial,sans-serif">
              <div class="miro__header" style="font-family:Helvetica,Arial,sans-serif;height:100%;min-height:100px;padding:0 40px">
                <table class="miro__header-content" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top;width:100%">
                  <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
                    <td class="miro__col-header-logo" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:32px;text-align:left;vertical-align:top;width:50%;word-wrap:break-word">

                    </td>
                    <td class="miro__col-header-btn" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;hyphens:auto;line-height:1.43;margin:0;padding:0;padding-top:26px;text-align:right;vertical-align:top;width:50%;word-wrap:break-word">
                      <a href="http://comingsoon.reducte.ma" class="miro-btn" target="_blank" style="Margin:0;background-color:#fff;border:1px solid #050038;border-radius:4px;box-sizing:border-box;color:#050038!important;cursor:pointer;display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:16px!important;font-stretch:normal;font-style:normal;font-weight:400;height:48px;letter-spacing:normal;line-height:48px!important;margin:0;padding:0;text-align:center;text-decoration:none;white-space:nowrap;width:128px"><span style="font-family:Helvetica,Arial,sans-serif">Aller ?? Reducte</span>
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="miro__content-body" style="font-family:Helvetica,Arial,sans-serif">
                <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:40px 40px 36px">
                  <div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24">enregistrement complet</div>
                  <div class="miro-title-block__subtitle font-size-20 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:20px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">Veuillez entrer ce code de confirmation dans la fen??tre o?? vous avez commenc?? ?? cr??er votre compte??:</div>
                </div>
                <div class="miro-confirmation-code-block" style="font-family:Helvetica,Arial,sans-serif;padding:0 40px">
                  <div class="miro-confirmation-code-block__code" style="background-color:#f3f4f8;border-radius:4px;color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:48px;font-stretch:normal;font-style:normal;font-weight:700;height:128px;letter-spacing:normal;line-height:128px;text-align:center">${code}</div>
                </div>
                <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:10px 0 0 40px">
                  <div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24"></div>
                  <div class="miro-title-block__subtitle font-size-20 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:20px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">votre appareil mobile, utilisez le code pour confirmer votre e-mail.</div>
                </div>
                <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:10px 0 12px 40px">
                  <div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24"></div>

                <table class="spacer" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top;width:100%">
                  <tbody style="font-family:Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
                      <td height="0px" style="-moz-hyphens:auto;-webkit-hyphens:auto;Margin:0;border-collapse:collapse!important;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:0;font-weight:400;hyphens:auto;line-height:0;margin:0;mso-line-height-rule:exactly;padding:0;text-align:left;vertical-align:top;word-wrap:break-word">??</td>
                    </tr>
                  </tbody>
                </table>
                <table class="row" style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;position:relative;text-align:left;vertical-align:top;width:100%">
                  <tbody style="font-family:Helvetica,Arial,sans-serif">
                    <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">
                      <th class="small-12 large-12 columns first last" style="Margin:0 auto;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.43;margin:0 auto;padding:0;padding-bottom:0;padding-left:40px;padding-right:40px;text-align:left;width:440px">
                        <table style="border-collapse:collapse;border-spacing:0;font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top;width:100%">
                          <tr style="font-family:Helvetica,Arial,sans-serif;padding:0;text-align:left;vertical-align:top">

                            <th class="expander" style="Margin:0;color:#0a0a0a;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;line-height:1.43;margin:0;padding:0!important;text-align:left;visibility:hidden;width:0"></th>
                          </tr>
                        </table>
                      </th>
                    </tr>
                  </tbody>
                </table>
                <div class="miro-title-block" style="background-position:center;background-repeat:no-repeat;background-size:100% auto;font-family:Helvetica,Arial,sans-serif;padding:10px 0 23px 40px">
                  <div class="miro-title-block__title font-size-42" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:42px!important;font-stretch:normal;font-style:normal;font-weight:700;letter-spacing:normal;line-height:1.24"></div>
                  <div class="miro-title-block__subtitle font-size-20 m-top-16" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:20px!important;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.4;margin-top:16px;opacity:.6">Si vous n'avez pas cr???? de compte dans Reduce, veuillez ignorer ce message.</div>
                </div>
                <div class="miro__sep" style="background-color:#e1e0e7;font-family:Helvetica,Arial,sans-serif;height:1px"></div>
              </div>
            </div>
            <div class="miro__footer" style="font-family:Helvetica,Arial,sans-serif;padding-bottom:72px;padding-top:42px">
              <div class="miro__footer-title" style="color:#050038;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-stretch:normal;font-style:normal;font-weight:400;letter-spacing:normal;line-height:1.38;margin-top:0!important;opacity:.7;text-align:center">Vous avez re??u cette notification car vous vous ??tes inscrit
                <br style="font-family:Helvetica,Arial,sans-serif">??
                <a href="http://comingsoon.reducte.ma" target="_blank" style="Margin:0;color:blue;font-family:Helvetica,Arial,sans-serif;font-weight:400;line-height:1.43;margin:0;padding:0;text-align:left;text-decoration:none">Reducte</a> ??? des r??ductions infinies sur n'importe lequel de vos achats.</div>
            </div>
          </td>
        </tr>
      </table>

      <!-- prevent Gmail on iOS font size manipulation -->
      <div style="display:none;font:15px courier;font-family:Helvetica,Arial,sans-serif;line-height:0;white-space:nowrap">?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ??
        ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? ??</div>
    </body>
  </html>`;
};

module.exports = { Pdf_contract_template, EmailTemplate, OTP_EMAIL };
