export const getHtml = data => {
	const { phone, email, message, name } = data
	return `
	<!DOCTYPE html>
	<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
	<head>
		<title></title>
		<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
		<meta content="width=device-width, initial-scale=1.0" name="viewport" />
		<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
		<style>
			* {
				box-sizing: border-box;
			}
	
			body {
				margin: 0;
				padding: 0;
			}
	
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: inherit !important;
			}
	
			#MessageViewBody a {
				color: inherit;
				text-decoration: none;
			}
	
			p {
				line-height: inherit
			}
	
			.desktop_hide,
			.desktop_hide table {
				mso-hide: all;
				display: none;
				max-height: 0px;
				overflow: hidden;
			}
	
			.image_block img+div {
				display: none;
			}
	
			@media (max-width:520px) {
				.desktop_hide table.icons-inner {
					display: inline-block !important;
				}
	
				.icons-inner {
					text-align: center;
				}
	
				.icons-inner td {
					margin: 0 auto;
				}
	
				.row-content {
					width: 100% !important;
				}
	
				.mobile_hide {
					display: none;
				}
	
				.stack .column {
					width: 100%;
					display: block;
				}
	
				.mobile_hide {
					min-height: 0;
					max-height: 0;
					max-width: 0;
					overflow: hidden;
					font-size: 0px;
				}
	
				.desktop_hide,
				.desktop_hide table {
					display: table !important;
					max-height: none !important;
				}
			}
		</style>
	</head>
	
	<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
		<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
			style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
			<tbody>
				<tr>
					<td>
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
							role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0"
											class="row-content stack" role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;"
											width="500">
											<tbody>
												<tr>
													<td class="column column-1"
														style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="100%">
														<table border="0" cellpadding="0" cellspacing="0"
															class="heading_block block-1" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
															width="100%">
															<tr>
																<td class="pad" style="width:100%;text-align:center;">
																	<h1
																		style="margin: 0; color: #555555; font-size: 23px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
																		<span class="tinyMce-placeholder">Новый клиент с
																			сайта!</span>
																	</h1>
																</td>
															</tr>
														</table>
														<div class="spacer_block block-2"
															style="height:30px;line-height:30px;font-size:1px;"> </div>
														<!--[if mso]><style>#list-r0c0m2 ol li{mso-special-format: number; text-align: -webkit-match-parent; display: list-item;}#list-r0c0m2 .levelOne li {margin-top: 0 !important;} #list-r0c0m2 .levelOne {margin-left: -20px !important;}#list-r0c0m2 .levelTwo li {margin-top: 0 !important;} #list-r0c0m2 .levelTwo {margin-left: 20px !important;}#list-r0c0m2 .levelThree li {margin-top: 0 !important;} #list-r0c0m2 .levelThree {margin-left: 60px !important;}#list-r0c0m2 .levelFour li {margin-top: 0 !important;} #list-r0c0m2 .levelFour {margin-left: 100px !important;}#list-r0c0m2 .levelFive li {margin-top: 0 !important;} #list-r0c0m2 .levelFive {margin-left: 140px !important;}#list-r0c0m2 .levelSix li {margin-top: 0 !important;} #list-r0c0m2 .levelSix {margin-left: 180px !important;}#list-r0c0m2 .levelSeven li {margin-top: 0 !important;} #list-r0c0m2 .levelSeven {margin-left: 220px !important;}#list-r0c0m2 .levelEight li {margin-top: 0 !important;} #list-r0c0m2 .levelEight {margin-left: 260px !important;}</style><![endif]-->
														<table border="0" cellpadding="10" cellspacing="0"
															class="list_block block-3" id="list-r0c0m2" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
															width="100%">
															<tr>
																<td class="pad">
																	<div class="levelOne" style="margin-left: 0;">
																		<ol class="leftList"
																			style="margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; font-weight: 400; text-align: left; color: #000000; font-size: 14px; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; line-height: 180%; direction: ltr; letter-spacing: 0; list-style-type: none;">
																			<li style="margin-bottom: 0; text-align: left;">
																				Имя: ${name}
																			</li>
																			<li style="margin-bottom: 0; text-align: left;">
																				Email: ${email}
																			</li>
																			<li style="margin-bottom: 0; text-align: left;">
																				Телефон: ${phone}
																			</li>
																			<li style="margin-bottom: 0; text-align: left;">
																				Сообщение: <p>${message}</p>
																			</li>
																		</ol>
																	</div>
																</td>
															</tr>
														</table>
														<table border="0" cellpadding="10" cellspacing="0"
															class="divider_block block-4" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
															width="100%">
															<tr>
																<td class="pad">
																	<div align="center" class="alignment">
																		<table border="0" cellpadding="0" cellspacing="0"
																			role="presentation"
																			style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																			width="100%">
																			<tr>
																				<td class="divider_inner"
																					style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;">
																					<span> </span>
																				</td>
																			</tr>
																		</table>
																	</div>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
							role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0"
											class="row-content stack" role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 500px;"
											width="500">
											<tbody>
												<tr>
													<td class="column column-1"
														style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="50%">
														<table border="0" cellpadding="10" cellspacing="0"
															class="button_block mobile_hide block-1" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
															width="100%">
															<tr>
																<td class="pad">
																	<div align="center" class="alignment">
																		<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="tel" style="height:38px;width:163px;v-text-anchor:middle;" arcsize="11%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px"><![endif]--><a
																			href="tel:${phone}"
																			style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#3AAEE0;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all;"
																			target="_blank"><span
																				style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal;"><span
																					dir="ltr"
																					style="word-break: break-word; line-height: 28px;">Позвонить
																					клиенту</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																	</div>
																</td>
															</tr>
														</table>
													</td>
													<td class="column column-2"
														style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="50%">
														<table border="0" cellpadding="10" cellspacing="0"
															class="button_block block-1" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
															width="100%">
															<tr>
																<td class="pad">
																	<div align="center" class="alignment">
																		<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="mailto:MAILTO" style="height:38px;width:156px;v-text-anchor:middle;" arcsize="11%" stroke="false" fillcolor="#3AAEE0"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px"><![endif]--><a
																			href="mailto:${email}"
																			style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#3AAEE0;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:14px;text-align:center;mso-border-alt:none;word-break:keep-all;"
																			target="_blank"><span
																				style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal;"><span
																					dir="ltr"
																					style="word-break: break-word; line-height: 28px;">Написать
																					клиенту</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																	</div>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
							role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
							<tbody>
								<tr>
									<td>
										<table align="center" border="0" cellpadding="0" cellspacing="0"
											class="row-content stack" role="presentation"
											style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 500px;"
											width="500">
											<tbody>
												<tr>
													<td class="column column-1"
														style="font-weight: 400; text-align: left; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
														width="100%">
														<table border="0" cellpadding="0" cellspacing="0"
															class="empty_block block-1" role="presentation"
															style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
															width="100%">
															<tr>
																<td class="pad">
																	<div></div>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table><!-- End -->
	</body>
	
	</html>
	`
}

export const getText = data => {
	const { phone, email, message, name } = data
	return `
	Новый клиент - ${name}!\n
	Данные:\n
	\tEmail: ${email}\n
	\tТелефон: ${phone}\n
	\n
	Пишет:\n
	${message}
`
}
