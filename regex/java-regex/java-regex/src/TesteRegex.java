import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class TesteRegex{
    public static void main (String[]args){
        Pattern pattern = Pattern.compile("(\\d{4})(-)(\\d{2})(-)(\\d{2})");

        Matcher matcher=pattern.matcher("2007-12-31");
        
        String ano=null, mes=null, dia=null;
        if (matcher.matches()){
            ano=matcher.group(1);
            mes=matcher.group(3);
            dia=matcher.group(5);
        }
        String match=matcher.group(0);
        System.out.printf("%s-%s-%s", dia, mes, ano); 
        match=match.replaceAll("-", "/"); 
        System.out.println(match);
    }
}