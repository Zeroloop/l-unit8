<?LassoScript
var:'errorStr' = error_currentError;
'<h2>Lasso Error (L-Unit Root)</h2>';
'<p>('; error_currentError: -errorCode; ') '; (var:'errorStr', -encodebreak); '</p>';

select: error_code;
	case:-9990;
		'<p>Please check that you have enabled file read / write access in SiteAdmin > Security > Files > Root for '(unit_filesUser? 'the user: 'unit_filesUser|'the current user')'</p>';

	case:-9961;
		'<p>Please check that you have enabled the ctyp and ctag extensions in SiteAdmin > Site > File Tags Settings</p>';

	case:-2;
		'<p>Please check that you have enabled the ctyp and ctag extensions in SiteAdmin > Site > File Tags Settings (Or set "Allow Any File Extension" to yes in Security > Files > Root)</p>';

/select;

?>
