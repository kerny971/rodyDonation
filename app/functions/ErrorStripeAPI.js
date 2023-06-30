module.exports = class ErrorStripeAPI {

    // CARD NUMBER
    CARD = {
        param: ['card[number]', 'number'],
        code: [
            {name: 'parameter_invalid_empty', message: "Veuillez indiquer votre numéro de carte bancaire"},
            {name: 'incorrect_number', message: "Votre numéro de carte est incorrecte."}
        ],
    }

    EXP_YEAR = {
        param: ['card[exp_year]','exp_year'],
        code: [
            {name: 'parameter_invalid_integer', message: "Indiquer l'année sur 4 chiffre de fin de validitée de votre carte bancaire."},
            {name: 'invalid_expiry_year', message: "L'année d'expiration de votre carte bancaire est invalide."}
        ]
    }

    MONTH = {
        param: ['exp_month'],
        code: [
            {name: 'invalid_expiry_year', message: "Le mois de votre carte bancaire est invalide."}
        ]
    }

    CVC = {
        param: ['cvc'],
        code: [
            {name: 'invalid_cvc', message: "Le code CVC de votre carte bancaire n'est pas valide."}
        ]
    }

    EMAIL = {
        param: ['receipt_email'],
        code: [
            {name: 'email_invalid', message: "L'adresse électronique n'est pas valide."}
        ]
    }

    AMOUNT = {
        param: ['amount'],
        code: [
            {name: 'parameter_invalid_integer', message: "Indiquer le montant que vous souhaitiez donner. Le montant doit être supérieur ou égal à 1."}
        ]
    }



    ERROR_STRIPE = {
      "account_already_exists": "L'adresse e-mail fournie pour la création d'un compte différé est déjà associée à un compte. Utilisez le flux OAuth pour connecter le compte existant à votre plateforme.",
      "account_country_invalid_address": "Le pays de l'adresse professionnelle fournie ne correspond pas au pays du compte. Les entreprises doivent être situées dans le même pays que le compte.",
      "account_invalid": "L'ID de compte fourni comme valeur pour l'en-tête Stripe-Account n'est pas valide. Vérifiez que vos demandes spécifient un ID de compte valide.",
      "account_number_invalid": "Le numéro de compte bancaire fourni n'est pas valide (par exemple, des chiffres manquants). Les informations de compte bancaire varient d'un pays à l'autre. Nous vous recommandons de créer des validations dans vos formulaires de saisie en fonction des formats de compte bancaire que nous fournissons.",
      "alipay_upgrade_required": "Cette méthode de création de paiements Alipay n'est plus prise en charge. Veuillez mettre à niveau votre intégration pour utiliser plutôt les sources.",
      "amount_too_large": "Le montant spécifié est supérieur au montant maximal autorisé. Utilisez un montant inférieur et réessayez.",
      "amount_too_small": "Le montant spécifié est inférieur au montant minimum autorisé. Utilisez un montant supérieur et réessayez.",
      "api_key_expired": "La clé API fournie a expiré. Obtenez vos clés API actuelles à partir du tableau de bord et mettez à jour votre intégration pour les utiliser.",
      "balance_insufficient": "Le transfert ou le paiement n'a pas pu être effectué car le compte associé ne dispose pas d'un solde suffisant. Créez un nouveau transfert ou paiement en utilisant un montant inférieur ou égal au solde disponible du compte.",
      "bank_account_exists": "Le compte bancaire fourni existe déjà sur l'objet Client spécifié. Si le compte bancaire doit également être associé à un autre client, incluez l'ID client correct lors de la nouvelle demande.",
      "bank_account_unusable": "Le compte bancaire fourni ne peut pas être utilisé pour les paiements. Un autre compte bancaire doit être utilisé.",
      "bank_account_unverified": "Votre plate-forme Connect tente de partager un compte bancaire non vérifié avec un compte connecté.",
      "bitcoin_upgrade_required": "Cette méthode de création de paiements Bitcoin n'est plus prise en charge. Veuillez mettre à niveau votre intégration pour utiliser plutôt les sources.",
      "card_declined": "La carte a été refusée.",
      "charge_already_captured": "La charge que vous essayez de capturer a déjà été capturée. Mettez à jour la demande avec un ID de charge non capturé.",
      "charge_already_refunded": "Les frais que vous essayez de rembourser ont déjà été remboursés. Mettez à jour la demande pour utiliser l'ID d'un frais qui n'a pas été remboursé.",
      "charge_disputed": "Les frais que vous essayez de rembourser ont été refacturés. Consultez la documentation relative aux litiges pour savoir comment y répondre.",
      "charge_exceeds_source_limit": "Ces frais vous feraient dépasser votre limite de traitement de fenêtre mobile pour ce type de source. Veuillez réessayer plus tard ou contactez-nous pour demander une limite de traitement plus élevée.",
      "charge_expired_for_capture": "Les frais ne peuvent pas être saisis car l'autorisation a expiré. Les frais d'authentification et de capture doivent être saisis dans les sept jours.",
      "country_unsupported": "Votre plateforme a tenté de créer un compte personnalisé dans un pays qui n'est pas encore pris en charge. Assurez-vous que les utilisateurs ne peuvent s'inscrire que dans les pays pris en charge par les comptes personnalisés.",
      "coupon_expired": "Le coupon fourni pour un abonnement ou une commande a expiré. Créez un nouveau coupon ou utilisez-en un qui est valide.",
      "customer_max_subscriptions": "Le nombre maximal d'abonnements pour un client a été atteint. Contactez-nous si vous recevez cette erreur.",
      "email_invalid": "L'adresse e-mail n'est pas valide (par exemple, n'est pas correctement formatée). Vérifiez que l'adresse e-mail est correctement formatée et ne comprend que les caractères autorisés.",
      "expired_card": "La carte a expiré. Vérifiez la date d'expiration ou utilisez une autre carte.",
      "idempotency_key_in_use": "La clé idempotency fournie est actuellement utilisée dans une autre demande. Cela se produit si votre intégration effectue simultanément des demandes en double.",
      "incorrect_address": "L'adresse de la carte est incorrecte. Vérifiez l'adresse de la carte ou utilisez une autre carte.",
      "incorrect_cvc": "Le code de sécurité de la carte est incorrect. Vérifiez le code de sécurité de la carte ou utilisez une autre carte.",
      "incorrect_number": "Le numéro de carte est incorrect. Vérifiez le numéro de la carte ou utilisez une autre carte.",
      "incorrect_zip": "Le code postal de la carte est incorrect. Vérifiez le code postal de la carte ou utilisez une autre carte.",
      "instant_payouts_unsupported": "La carte de débit fournie comme compte externe ne prend pas en charge les paiements instantanés. Fournissez une autre carte de débit ou utilisez un compte bancaire à la place.",
      "invalid_card_type": "La carte fournie en tant que compte externe n'est pas une carte de débit. Fournissez une carte de débit ou utilisez un compte bancaire à la place.",
      "invalid_charge_amount": "Le montant spécifié n'est pas valide. Le montant des frais doit être un entier positif dans la plus petite unité monétaire et ne pas dépasser le montant minimum ou maximum.",
      "invalid_cvc": "Le code de sécurité de la carte n'est pas valide. Vérifiez le code de sécurité de la carte ou utilisez une autre carte.",
      "invalid_expiry_month": "Le mois d'expiration de la carte est incorrect. Vérifiez la date d'expiration ou utilisez une autre carte.",
      "invalid_expiry_year": "L'année d'expiration de la carte est incorrecte. Vérifiez la date d'expiration ou utilisez une autre carte.",
      "invalid_number": "Le numéro de carte n'est pas valide. Vérifiez les détails de la carte ou utilisez une autre carte.",
      "invalid_source_usage": "La source ne peut pas être utilisée car elle n'est pas dans le bon état (par exemple, une demande de facturation essaie d'utiliser une source avec une source en attente, en échec ou consommée). Vérifiez l'état de la source que vous êtes tentative d'utilisation. ",
      "facture_no_customer_line_items": "Une facture ne peut pas être générée pour le client spécifié car aucun élément de facture n'est en attente. Vérifiez que le client correct est spécifié ou créez d'abord les éléments de facture nécessaires.",
      "facture_no_subscription_line_items": "Une facture ne peut pas être générée pour l'abonnement spécifié car aucun élément de facture n'est en attente. Vérifiez que l'abonnement correct est spécifié ou créez d'abord les éléments de facture nécessaires.",
      "facture_not_editable": "La facture spécifiée ne peut plus être modifiée. Au lieu de cela, envisagez de créer des éléments de facture supplémentaires qui seront appliqués à la prochaine facture. Vous pouvez soit générer manuellement la prochaine facture ou attendre qu'elle soit automatiquement générée à la fin du cycle de facturation. ",
      "facture_upcoming_none": "Il n'y a aucune facture à venir sur le client spécifié à prévisualiser. Seuls les clients avec des abonnements actifs ou des éléments de facture en attente ont des factures qui peuvent être prévisualisées.",
      "livemode_mismatch": "Les clés, requêtes et objets de l'API de test et de mode en direct ne sont disponibles que dans le mode dans lequel ils se trouvent.",
      "missing": "Un ID client et source ont été fournis, mais la source n'a pas été enregistrée pour le client. Pour créer des frais pour un client avec une source spécifiée, vous devez d'abord enregistrer les détails de la carte.",
      "not_allowed_on_standard_account": "Les transferts et les paiements pour le compte d'un compte connecté standard ne sont pas autorisés.",
      "order_creation_failed": "La commande n'a pas pu être créée. Vérifiez les détails de la commande, puis réessayez.",
      "order_required_settings": "La commande n'a pas pu être traitée car il manque les informations requises. Vérifiez les informations fournies et réessayez.",
      "order_status_invalid": "La commande ne peut pas être mise à jour car le statut fourni n'est pas valide ou ne suit pas le cycle de vie de la commande (par exemple, une commande ne peut pas passer de créée à satisfaite sans passer d'abord par payée).",
      "order_upstream_timeout": "La demande a expiré. Réessayez plus tard.",
      "out_of_inventory": "La référence est en rupture de stock. Si plus de stock est disponible, mettez à jour la quantité en stock de la référence et réessayez.",
      "parameter_invalid_empty": "Une ou plusieurs valeurs requises n'ont pas été fournies. Assurez-vous que les demandes incluent tous les paramètres requis.",
      "parameter_invalid_integer": "Un ou plusieurs des paramètres nécessitent un entier, mais les valeurs fournies étaient d'un type différent. Assurez-vous que seules les valeurs prises en charge sont fournies pour chaque attribut. Reportez-vous à notre documentation API pour rechercher le type de données chacune l'attribut prend en charge. ",
      "parameter_invalid_string_blank": "Une ou plusieurs valeurs fournies ne comprenaient que des espaces. Vérifiez les valeurs dans votre demande et mettez à jour celles qui ne contiennent que des espaces.",
      "parameter_invalid_string_empty": "Une ou plusieurs valeurs de chaîne obligatoires sont vides. Assurez-vous que les valeurs de chaîne contiennent au moins un caractère.",
      "parameter_missing": "Une ou plusieurs valeurs requises sont manquantes. Consultez notre documentation API pour voir quelles valeurs sont nécessaires pour créer ou modifier la ressource spécifiée.",
      "parameter_unknown": "La demande contient un ou plusieurs paramètres inattendus. Supprimez-les et réessayez.",
      "parameters_exclusive": "Deux ou plusieurs paramètres mutuellement exclusifs ont été fournis. Consultez notre documentation API ou le message d'erreur renvoyé pour voir quelles valeurs sont autorisées lors de la création ou de la modification de la ressource spécifiée.",
      "payment_intent_authentication_failure": "L'authentification 3DSecure à échouée.",
      "payment_intent_incompatible_payment_method": "Le PaymentIntent attendait un mode de paiement avec des propriétés différentes de celles fournies.",
      "payment_intent_invalid_parameter": "Un ou plusieurs paramètres fournis n'étaient pas autorisés pour l'opération donnée sur PaymentIntent. Consultez notre référence API ou le message d'erreur renvoyé pour voir quelles valeurs n'étaient pas correctes pour ce PaymentIntent.",
      "payment_intent_payment_attempt_failed": "La dernière tentative de paiement pour le PaymentIntent a échoué. Vérifiez la propriété last_payment_error sur le PaymentIntent pour plus de détails et fournissez source_data ou une nouvelle source pour tenter d'exécuter à nouveau ce PaymentIntent.",
      "payment_intent_unexpected_state": "L'état de PaymentIntent était incompatible avec l'opération que vous tentiez d'effectuer.",
      "payment_method_unactivated": "Les frais ne peuvent pas être créés car le mode de paiement utilisé n'a pas été activé. Activez le mode de paiement dans le tableau de bord, puis réessayez.",
      "payment_method_unexpected_state": "L'état du mode de paiement fourni était incompatible avec l'opération que vous tentiez d'effectuer. Confirmez que le mode de paiement est dans un état autorisé pour l'opération donnée avant d'essayer de l'exécuter.",
      "payouts_not_allowed": "Les paiements ont été désactivés sur le compte connecté. Vérifiez l'état du compte connecté pour voir si des informations supplémentaires doivent être fournies ou si les paiements ont été désactivés pour une autre raison.",
      "platform_api_key_expired": "La clé API fournie par votre plate-forme Connect a expiré. Cela se produit si votre plate-forme a généré une nouvelle clé ou si le compte connecté a été déconnecté de la plate-forme. Obtenez vos clés API actuelles à partir du tableau de bord et mettez à jour votre l'intégration, ou contactez l'utilisateur et reconnectez le compte. ",
      "postal_code_invalid": "Le code postal fourni était incorrect.",
      "processing_error": "Une erreur s'est produite lors du traitement de la carte. Vérifiez que les détails de la carte sont corrects ou utilisez une autre carte.",
      "product_inactive": "Le produit auquel appartient cette référence n'est plus disponible à l'achat.",
      "rate_limit": "Trop de demandes arrivent trop rapidement dans l'API. Nous recommandons une interruption exponentielle de vos demandes.",
      "resource_already_exists": "Une ressource avec un ID spécifié par l'utilisateur (par exemple, plan ou coupon) existe déjà. Utilisez une valeur différente et unique pour l'ID et réessayez.",
      "resource_missing": "L'ID fourni n'est pas valide. Soit la ressource n'existe pas, soit un ID pour une autre ressource a été fourni.",
      "routing_number_invalid": "Le numéro de routage bancaire fourni n'est pas valide.",
      "secret_key_required": "La clé API fournie est une clé publiable, mais une clé secrète est requise. Obtenez vos clés API actuelles à partir du tableau de bord et mettez à jour votre intégration pour les utiliser.",
      "sepa_unsupported_account": "Votre compte ne prend pas en charge les paiements SEPA.",
      "shipping_calculation_failed": "Le calcul de l'expédition a échoué car les informations fournies étaient incorrectes ou n'ont pas pu être vérifiées.",
      "sku_inactive": "La référence est inactive et n'est plus disponible à l'achat. Utilisez une autre référence ou réactivez la référence actuelle.",
      "state_unsupported": "Se produit lors de la fourniture des informations legal_entity pour un compte personnalisé américain, si l'état fourni n'est pas pris en charge. (Il s'agit principalement des États et territoires associés.)",
      "tax_id_invalid": "Le numéro d'identification fiscale fourni n'est pas valide (par exemple, des chiffres manquants). Les informations d'identification fiscale varient d'un pays à l'autre, mais doivent comporter au moins neuf chiffres.",
      "taxes_calculation_failed": "Le calcul des taxes pour la commande a échoué.",
      "testmode_charges_only": "Votre compte n'a pas été activé et ne peut effectuer que des frais de test. Activez votre compte dans le tableau de bord pour commencer à traiter les frais réels.",
      "tls_version_unsupported": "Votre intégration utilise une ancienne version de TLS non prise en charge. Vous devez utiliser TLS 1.2 ou supérieur.",
      "token_already_used": "Le jeton fourni a déjà été utilisé. Vous devez créer un nouveau jeton avant de pouvoir réessayer cette demande.",
      "token_in_use": "Le jeton fourni est actuellement utilisé dans une autre demande. Cela se produit si votre intégration effectue simultanément des demandes en double.",
      "transferts_not_allowed": "Le transfert demandé ne peut pas être créé. Contactez-nous si vous recevez cette erreur.",
      "upstream_order_creation_failed": "La commande n'a pas pu être créée. Vérifiez les détails de la commande, puis réessayez.",
      "url_invalid": "L'URL fournie n'est pas valide.",
    }



    NO_CASE_MESSAGE_RETURN = "Une erreur s'est produite."


    constructor (error) {
        this.error = error;
        console.log(this.error)
    }


    sendError () {
        
        const param = [this.CARD, this.EXP_YEAR, this.MONTH, this.CVC, this.EMAIL, this.AMOUNT]

        if (this.error.param) {
            param.every((p) => {
                if (p.param.includes(this.error.param)) {
                    p.code.every((c) => {
                        if (c.name == this.error.code) {
                            this.error.message_traduction = c.message;
                            return false
                        }

                        return true
                    })
                }

                return true
            })
        }

        if (this.error.message_traduction) {
            return this.error
        }


        if (this.ERROR_STRIPE.hasOwnProperty(this.error.code)) {
            this.error.message_traduction = this.ERROR_STRIPE[this.error.code];
            return this.error
        }

        this.error.message_traduction = this.NO_CASE_MESSAGE_RETURN;
        return this.error
    }
}